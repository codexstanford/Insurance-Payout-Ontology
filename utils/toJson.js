const fs = require('fs');
const yaml = require('yaml');

const DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src`;
const DATA_MODEL_JSON_PATH = `${__dirname}/../datamodel-build/json`;
const UTILS_ANNOTATION_PATH = `${__dirname}/annotationBuilder`;
// document.querySelectorAll("svg g .divider:last-of-type").forEach(e => e.remove());


let objectsList = fs.readdirSync(DATA_MODEL_SRC_PATH);

// remove old build
if (fs.existsSync(DATA_MODEL_JSON_PATH)) {
  fs.rmdirSync(DATA_MODEL_JSON_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_JSON_PATH);


let output = {};
for (let file of objectsList) {
  // skip dot files
  if (file[0] == '.') {
    continue;
  }

  buildJSON(file);

}

fs.writeFileSync(`${DATA_MODEL_JSON_PATH}/datamodel.json`, JSON.stringify(output, null, 2), 'utf8');

fs.writeFileSync(`${DATA_MODEL_JSON_PATH}/datamodel.js`, "let datamodel = " + JSON.stringify(output, null, 2), 'utf8');
fs.writeFileSync(`${UTILS_ANNOTATION_PATH}/datamodel.js`, "let datamodel = " + JSON.stringify(output, null, 2), 'utf8');



function buildJSON(fileName) {
  let data = yaml.parse(fs.readFileSync(`${DATA_MODEL_SRC_PATH}/${fileName}`, 'utf-8'));

  console.log(JSON.stringify(data, null, 2));


  for (let ObjName in data) {

  
    render(ObjName, data[ObjName])


  }


}

function render(name, data) {

  output[name] = data;

  if (!data.type) {
    console.error(`Error Unspecified Object ${name} (no type property).`)
    throw (`Error Unspecified Object ${name} (no type property).`);
  }

}
