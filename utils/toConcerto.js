const fs = require('fs');
const loadObjFromSrc  = require('./lib/loadObjFromSrc.js');

const DATA_MODEL_CONCERTO_PATH = `${__dirname}/../docs/concerto`;

// document.querySelectorAll("svg g .divider:last-of-type").forEach(e => e.remove());

console.log('...Building concerto')
if (fs.existsSync(DATA_MODEL_CONCERTO_PATH)) {
  fs.rmSync(DATA_MODEL_CONCERTO_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_CONCERTO_PATH);



// for each object, build the ctl

let objectsList = loadObjFromSrc();
let output = `namespace org.codex.insurance
`;

for (let file of objectsList) {
  output += buildConcerto(file);
}

fs.writeFileSync(`${DATA_MODEL_CONCERTO_PATH}/insurance.cto`, output, 'utf8');


function buildConcerto(file) {

  let data = file.data;


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

  return "";

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

  output += ` {`;

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

      if (property.type == "List") {
        let listType = property.of;
        
        if (systemType[listType]) {
          listType = systemType[listType];
        }

        output += `
  o ${listType}[] ${propertyName}`;

        typeList[property.of] = true;
      }
      else {
        let typeName = property.type;
        if (systemType[typeName]) {
          typeName = systemType[typeName];
        }
        output += `
  o ${typeName} ${propertyName}`;
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

  let poutput = `namespace ${data.namespace}

${importStmt}

${output}
}
`

  fs.writeFileSync(`${DATA_MODEL_CONCERTO_PATH}/${name}.cto`, `${poutput}`);

  return output + `
}
`;
}

function renderEnum(name, data) {
  let output = '';

  output += `enum ${name} {
` 
  for (let value in data.values) {


    output += `  o ${value}
`;
  }
  output += `}
`;

let poutput = `namespace ${data.namespace}

${output}
`;


  fs.writeFileSync(`${DATA_MODEL_CONCERTO_PATH}/${name}.cto`, `${poutput}`);

  return output;
}
