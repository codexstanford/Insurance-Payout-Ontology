const fs = require('fs');
const loadObjFromSrc  = require('./lib/loadObjFromSrc.js');
const injectInheritedProperties  = require('./lib/injectInheritedProperties.js');
let objectsList = injectInheritedProperties(loadObjFromSrc());


const DATA_MODEL_JSON_PATH = `${__dirname}/../datamodel-build/json`;
const UTILS_ANNOTATION_PATH = `${__dirname}/annotationBuilder`;
// document.querySelectorAll("svg g .divider:last-of-type").forEach(e => e.remove());

console.log("...Building Json")


// remove old build
if (fs.existsSync(DATA_MODEL_JSON_PATH)) {
  fs.rmSync(DATA_MODEL_JSON_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_JSON_PATH);


let output = {};
for (let file of objectsList) {

  buildJSON(file);

}

fs.writeFileSync(`${DATA_MODEL_JSON_PATH}/datamodel.json`, JSON.stringify(output, null, 2), 'utf8');

fs.writeFileSync(`${DATA_MODEL_JSON_PATH}/datamodel.js`, "let datamodel = " + JSON.stringify(output, null, 2), 'utf8');
fs.writeFileSync(`${UTILS_ANNOTATION_PATH}/datamodel.js`, "let datamodel = " + JSON.stringify(output, null, 2), 'utf8');



function buildJSON(file) {
  let fileName = file.name;
  let data = file.data;

  for (let ObjName in data) {

  
    render(ObjName, data[ObjName])


  }


}

function render(name, data) {

  output[name] = data;

  if (data.inherit && data.inherit.indexOf(',') != -1) {
    data.inherit = data.inherit.split(', ');
  }

  if (!data.type) {
    console.error(`Error Unspecified Object ${name} (no type property).`)
    throw (`Error Unspecified Object ${name} (no type property).`);
  }

}
