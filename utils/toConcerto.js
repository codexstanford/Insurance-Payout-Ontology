const fs = require('fs');
const yaml = require('yaml');
const DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src`;
const DATA_MODEL_CONCERTO_PATH = `${__dirname}/../docs/concerto`;

// document.querySelectorAll("svg g .divider:last-of-type").forEach(e => e.remove());


if (fs.existsSync(DATA_MODEL_CONCERTO_PATH)) {
  fs.rmdirSync(DATA_MODEL_CONCERTO_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_CONCERTO_PATH);



// for each object, build the ctl

let objectsList = fs.readdirSync(DATA_MODEL_SRC_PATH);
let output = `namespace org.codex.insurance
`;

for (let file of objectsList) {
  // skip dot files
  if (file[0] == '.') {
    continue;
  }


  output += buildConcerto(file);
}

//  fs.writeFileSync(`${DATA_MODEL_CONCERTO_PATH}/insurance.cto`, output, 'utf8');


function buildConcerto(fileName) {
  console.log(`----
  ${fileName}
  `)
  let data = yaml.parse(fs.readFileSync(`${DATA_MODEL_SRC_PATH}/${fileName}`, 'utf-8'));

  console.log(JSON.stringify(data, null, 2));

  let output  = `
`;
  for (let ObjName in data) {

  
    output += render(ObjName, data[ObjName])


  }

  return output;
}


function render(name, data) {
  if (data.type == 'object') {
    return renderObject(name, data)
  } 
  
  if (data.type == 'enum') {
    return renderEnum(name, data)
  }

  if (!data.type) {
    console.error(`Error Unspecified Object ${name} (no type property).`)
    throw (`Error Unspecified Object ${name} (no type property).`);
  }

}

function renderObject(name, data) {


  let output = ``;

  if (data.isAbstract) {
    output += 'abstract '
  }
  
  output += `concept ${name}`;

  if (data.inherit) {


    if (typeof data.inherit == "string") {
      output += ` extends ${data.inherit}`;
    }
    else {
      output += ` extends`
      for (let inherit of data.inherit) {
        output += `${name}`;
      }
    }

  }

  output += ` {
`;

  if (data.isAbstract) {

  }
  let typeList = {};
  let systemType = {
    boolean : "Boolean",
    string: "String",
    number: "Double"
  }

  if (data.properties) {
    for (let propertyName in data.properties) {
      let property = data.properties[propertyName];
      if (systemType[propertyName]) {
        propertyName = systemType[propertyName];
      }
      if (property.type == "List") {
        output += `
  o ${property.of}[] ${propertyName}`;
        typeList[property.of] = true;
      }
      else {
        output += `
  o ${property.type} ${propertyName}`;
      typeList[property.type] = true;
      }
    }
  }


  let importStmt = "";


  
  let ignoreType = {
    List: true
  }

  for (let type in typeList) {
    if (ignoreType[type]) {
      continue;
    }
    if (systemType[type]) {
      continue;
    }
    importStmt += `import org.codex.insurance.core.${type} from https://codexstanford.github.io/Insurance-Payout-Ontology/concerto/${type}.cto
`;
  }

  output = `namespace ${data.namespace}

${importStmt}

${output}
}
`

  fs.writeFileSync(`${DATA_MODEL_CONCERTO_PATH}/${name}.cto`, `${output}`);

  return output;
}

function renderEnum(name, data) {
  let output = `namespace ${data.namespace}

`;

  output += `enum ${name} {
` 
  for (let value in data.values) {


    output += `  o ${value}
`;
  }
  output += `}
`;


  fs.writeFileSync(`${DATA_MODEL_CONCERTO_PATH}/${name}.cto`, `${output}`);

  return output;
}
