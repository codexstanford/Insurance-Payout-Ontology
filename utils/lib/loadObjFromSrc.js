const fs = require('fs');
const yaml = require('yaml');

const DATA_MODEL_SRC_PATH = `${__dirname}/../../datamodel-src`;


function loadObjFromSrc() {
  // build individual docs
  let mainList = fs.readdirSync(DATA_MODEL_SRC_PATH);
  let objectsList = [];

  for (let dirname of mainList) {
    if (dirname[0] == '.') {
      continue;
    }

    let fileList = fs.readdirSync(`${DATA_MODEL_SRC_PATH}/${dirname}`);

    for (let fileName of fileList) {
      if (fileName[0] != '.') {
        console.log(`"parsing ${DATA_MODEL_SRC_PATH}/${dirname}/${fileName} "`)
        let data = yaml.parse(fs.readFileSync(`${DATA_MODEL_SRC_PATH}/${dirname}/${fileName}`, 'utf-8'));
        let objName =  Object.keys(data)[0];
       
        // handle multi-inheritance as array instead of string 
        // Todo better triming, no really sensitive to spaces.
        if (data[objName].inherit && data[objName].inherit.indexOf(',') != -1) {
          data[objName].inherit = data[objName].inherit.split(', ');
        }
      
        objectsList.push({
          name: objName,
          data : data,
          filename: fileName,
          namespace: dirname
        })
      }
    }
  }

  return objectsList;
}

module.exports = loadObjFromSrc;