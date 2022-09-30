const fs = require('fs');

const loadObjFromSrc  = require('./lib/loadObjFromSrc.js');


let objectsList = loadObjFromSrc();

// first Index ALl
let INDEX = {};

function checkDoubleDefinitionAndIndex() {

  
  for (let file of objectsList) {
    if (INDEX[file.name]) {
      throw(`Object ${file.name} is defined 2 time
- defined in : ${INDEX[file.name].namespace}/${INDEX[file.name].filename}
- defined in : ${file.namespace}/${file.filename} 
      `)
    }

    INDEX[file.name] = file;
  
  }
}

function checkWrongType() {
  let authorizedTopType = {
    object: true,
    enum: true,
    system: true
  }
  
  for (let file of objectsList) {
    if (!authorizedTopType[file.data[file.name].type]) {

      throw(`Error : Object ${file.name} defined in ${file.namespace}/${file.filename} 
  use a non valid top type ${file.data[file.name].type}. Authorized value are : ${Object.keys(authorizedTopType).join(", ")}`);
    }
  }

}


function checkMissingObject() {

  for (let file of objectsList) {
    let objData = file.data[file.name];

    // inheritance
    if (objData.inherit) {
      if (!INDEX[objData.inherit]) {
        throw(`Error : Object ${file.name} defined in ${file.namespace}/${file.filename} 
  inherit a non existing object ${objData.inherit}`);
      }
    }

    if (objData.type == 'object') {
      // properties
      for (let propertyName in objData.properties) {
        let property = objData.properties[propertyName];
        let type = property.type;
        if (type == "List") {
          type = property.of;
        }
        if (!INDEX[type]) {
          throw(`Error : Object ${file.name} defined in ${file.namespace}/${file.filename} 
  has a property ${propertyName} of a non existing type ${type}`);
        }
        
      }
    }  
  }
}


function checkRequiredProperties() {
  for (let file of objectsList) {
    let objData = file.data[file.name];

    if (objData.type == "object") {
      if (!objData.properties && !objData.isAbstract) {
        throw(`Error : Object ${file.name} defined in ${file.namespace}/${file.filename} 
        does not have a properties field`);
      }
    }
    if (objData.type == "enum") {
      if (!objData.values && !objData.isAbstract) {
        throw(`Error : Enum ${file.name} defined in ${file.namespace}/${file.filename} 
        does not have a values field`);
      }
    }
  }
}

checkDoubleDefinitionAndIndex();
checkWrongType();
checkMissingObject();
checkRequiredProperties();
