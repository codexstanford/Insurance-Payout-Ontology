
function injectInheritedProperties(objectsList) {
  let INDEX = {};
  
  for (let file of objectsList) {
    INDEX[file.name] = file.data[file.name];
  }

  for (let file of objectsList) {
    let data = file.data[file.name];
    if (data.inherit) {
      let parentObj = INDEX[data.inherit];

      if (data.type == 'object') {
        for (let property in parentObj.properties) {
          if (!data.properties[property]) {
            parentObj.properties[property].inherited = data.inherit;
            data.properties[property] = parentObj.properties[property];
          } else {
            data.properties[property].overloaded = data.inherit;
          }
        }
      }
    }
  }

  return objectsList;
}

module.exports = injectInheritedProperties;