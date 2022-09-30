const fs = require('fs');
const loadObjFromSrc  = require('./lib/loadObjFromSrc.js');


const DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src`;
const DATA_MODEL_TS_PATH = `${__dirname}/../datamodel-build/typescript`;
console.log("...Building Typescript")

let objectsList = loadObjFromSrc();

// remove old build
if (fs.existsSync(DATA_MODEL_TS_PATH)) {
  fs.rmSync(DATA_MODEL_TS_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_TS_PATH);

// for each object, build the TS

for (let file of objectsList) {
  buildTypeScriptObject(file);
}

function buildTypeScriptObject(file) {
  let data = file.data;


  for (let ObjName in data) {

    render(ObjName, data[ObjName])


  }
}

function render(name, data) {
  if (data.type == 'object') {
    renderObject(name, data)
  }
  if (data.type == 'enum') {
    renderEnum(name, data)
  }
  if (!data.type) {
    console.error(`Error Unspecified Object ${name} (no type property).`)
    throw (`Error Unspecified Object ${name} (no type property).`);
  }

}

function renderObject(name, data) {

  let output = "export ";

  // used == on purpose!
  if (data.abstract == true) {
    output += "abstract ";
  }

  output += `class ${name}`;

  if (data.inherit) {
    output += ` extends ${data.inherit}`;
  }

  output += ` {
`;

  let typeList = {};
  for (let propertyName in data.properties) {
    let property = data.properties[propertyName];

    output += `  ${propertyName}: ${property.type};
`;
    typeList[property.type] = true;
  }

  let importStmt = "";

  let systemType = {
    boolean : true,
    string: true,
    any : true,
    number: true
  }
  for (let type in typeList) {
    if (systemType[type]) {
      continue;
    }
    importStmt += `import { ${type} } from "./${type}";
`;
  }

  output = `${importStmt}

${output}

}
`

 fs.writeFileSync(`${DATA_MODEL_TS_PATH}/${name}.ts`, output, 'utf8');

}

function renderEnum(name, data) {
  let output = "";

  output += `export enum ${name} {
`

  for (let value in data.values) {
    output += `  ${value},
`
  }

  output += `}
`;

  fs.writeFileSync(`${DATA_MODEL_TS_PATH}/${name}.ts`, output, 'utf8');
}