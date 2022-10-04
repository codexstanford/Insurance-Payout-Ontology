
function inheritParentProperties(data, parentObjectName, chain) {

  // check for infinite looop
  if (chain.indexOf(parentObjectName) != -1) {
    return;
  }
  chain.push(parentObjectName);

  let parentObj = INJECTION_INDEX[parentObjectName];

  if (!parentObj) {
    console.log(`${parentObjectName} does not exist`);

    return;
  }
  if (data.type == 'object') {
    for (let property in parentObj.properties) {
      if (!data.properties[property] && !property.inherited) {
      //  parentObj.properties[property].inherited = parentObjectName;
        data.properties[property] = {...parentObj.properties[property]};
        data.properties[property].inherited = parentObjectName;
      }
    }
  }


  // recursive heritage!
  if (parentObj.inherit) {
    if (Array.isArray(parentObj.inherit)) {
      for (let parent of parentObj.inherit) {
        inheritParentProperties(data, parent, chain);
      }
    }
    else  {
      inheritParentProperties(data, parentObj.inherit, chain);
    }
  }
}

let INJECTION_INDEX = {};

function injectInheritedProperties(objectsList) {

  
  for (let file of objectsList) {
    INJECTION_INDEX[file.name] = file.data[file.name];
  }

  for (let file of objectsList) {
    let data = file.data[file.name];
    if (Array.isArray(data.inherit)) {
      for (let parent of data.inherit) {
        inheritParentProperties(data, parent, [file.name]);
      }
    }
    else if (data.inherit) {
      inheritParentProperties(data, data.inherit, [file.name]);
    }
  }

  return objectsList;
}

module.exports = injectInheritedProperties;