const fs = require('fs');
const yaml = require('yaml');

const DATA_MODEL_SRC_PATH = `${__dirname}/../../datamodel-src`;


function loadObjFromSrc() {
  // buidl individual docs
  let mainList = fs.readdirSync(DATA_MODEL_SRC_PATH);
  let objectsList = [];

  for (let dirname of mainList) {
    if (dirname[0] == '.') {
      continue;
    }
    let fileList = fs.readdirSync(`${DATA_MODEL_SRC_PATH}/${dirname}`);
    for (let fileName of fileList) {
      if (fileName[0] != '.') {
        let data = yaml.parse(fs.readFileSync(`${DATA_MODEL_SRC_PATH}/${dirname}/${fileName}`, 'utf-8'));
        let objName =  Object.keys(data)[0];
        objectsList.push({
          name: objName,
          data : data,
          from: dirname
        })
      }
    
    }
  }

  return objectsList;
}


module.exports = loadObjFromSrc;