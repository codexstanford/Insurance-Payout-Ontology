// https://schema.org/version/latest/schemaorg-current-https.jsonld
const fs = require('fs');
const yaml = require('yaml');


const axios = require('axios').default;

const SCHEMA_DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src/Schema`;

async function getSchemaJSON() {
  try {
    const response = await axios.get('https://schema.org/version/latest/schemaorg-current-https.jsonld');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

let CLASS_INDEX = {

}

async function run() {
  let originalData = await getSchemaJSON();


  // indexClasses
  for (let item of originalData["@graph"]) {
    if (item["@type"] == "rdfs:Class") {
      CLASS_INDEX[item["@id"]] = item;
      item.properties = {}
    }  
  }

 
  // index Properties
  for (let item of originalData["@graph"]) {
    if (item["@type"] == "rdf:Property") {
      if (!item["schema:domainIncludes"]) {
        continue;
      }
      if (Array.isArray(item["schema:domainIncludes"])) {
        for (let obj of item["schema:domainIncludes"]) {
          if (CLASS_INDEX[obj["@id"]]) {
            CLASS_INDEX[obj["@id"]].properties[item["@id"]] = item;
          }
          else {
            console.log(`${obj["@id"]} not fund`);
          }
        }
      }
      else {
        if (CLASS_INDEX[item["schema:domainIncludes"]["@id"]]) {
          CLASS_INDEX[item["schema:domainIncludes"]["@id"]].properties[item["@id"]] = item;
        }
        else {
          console.log(`${item["schema:domainIncludes"]["@id"]} not fund`);
        }
      }
    }  
  }

  // map enums values

  for (let item of originalData["@graph"]) {
    if (CLASS_INDEX[item["@type"]]) {
      CLASS_INDEX[item["@type"]].properties[item["@id"]] = item;
    }  
  }



  for (let item in CLASS_INDEX) {
    render(item);
  }


  
}

function transformType(type) {
  switch (type) {
    case "Text":
      type = "string";
    break;
    case "Number":
      type = "number";
    break;
    case "Boolean":
      type = "boolean";
    break;
    case "Date":
      type = "date";
    break;
    case "DateTime":
      type = "dateTime";
    break;
    case "Time":
      type = "time";
    break;
    case "Integer":
      type = "number";
    break;
    case "URL":
      type = "string";
    break;
  }

  return type;
  
}

function render(itemName) {
  console.log(`render ${itemName}`);


  if (CLASS_INDEX[itemName]["rdfs:subClassOf"] && CLASS_INDEX[itemName]["rdfs:subClassOf"]["@id"] && CLASS_INDEX[itemName]["rdfs:subClassOf"]["@id"].indexOf("Enumeration") != -1) {
    renderEnum(itemName);
  }
  else {
    renderObject(itemName)
  }
}

function renderEnum(itemName) {
  let obj = CLASS_INDEX[itemName];

  let outObj = {};
  outObj[itemName.replace("schema:", "")] = {
    type : "enum",
    documentation: {
      en: obj["rdfs:comment"]  || ""
    },
  };
  let outContent = outObj[itemName.replace("schema:", "")];
  if (obj["rdfs:subClassOf"]) {
    if (Array.isArray(obj["rdfs:subClassOf"])) {
      let inheritList = [];
      for (let item of obj["rdfs:subClassOf"]) {
        if (inheritList.indexOf(item["@id"].replace("schema:", "")) == -1) {
          inheritList.push(item["@id"].replace("schema:", ""));
        }
      }
      outContent.inherit = inheritList;
    }
    else {
      outContent.inherit = obj["rdfs:subClassOf"]["@id"].replace("schema:", "");
    }
  }

  outContent.values = {};
  
  for (let propertyName in obj.properties) {
    let property = obj.properties[propertyName];
    let label = property["rdfs:label"] || propertyName.replace("schema:", "");
    
    let propObj = {
      documentation: {
        en : property["rdfs:comment"]  || ""
      }
    };
    outContent.values[label] = propObj;

   
  }
  fs.writeFileSync(`${SCHEMA_DATA_MODEL_SRC_PATH}/${itemName.replace("schema:", "")}.yml`, yaml.stringify(outObj), 'utf-8');
}

function renderObject(itemName) {
  let obj = CLASS_INDEX[itemName];



  let outObj = {};
  outObj[itemName.replace("schema:", "")] = {
    type : "object",
    documentation: {
      en: obj["rdfs:comment"]  || ""
    },
  };
  let outContent = outObj[itemName.replace("schema:", "")];


  if (obj["rdfs:subClassOf"]) {
    if (Array.isArray(obj["rdfs:subClassOf"])) {
      let inheritList = [];
      for (let item of obj["rdfs:subClassOf"]) {
        if (inheritList.indexOf(item["@id"].replace("schema:", "")) == -1) {
          inheritList.push(item["@id"].replace("schema:", ""));
        }
      }
      outContent.inherit = inheritList;
    }
    else {
      outContent.inherit = obj["rdfs:subClassOf"]["@id"].replace("schema:", "");
    }
  }

  // ugly but force good key order
  outContent.properties = {};
  for (let propertyName in obj.properties) {
    let property = obj.properties[propertyName];
    let label = property["rdfs:label"] || propertyName.replace("schema:", "");

    let propType = property["@type"];
    if ( property["schema:rangeIncludes"]) {
      if (Array.isArray(property["schema:rangeIncludes"])) {
        // Todo multiple prop type
        let range = [];
        for (let item of property["schema:rangeIncludes"]) {
          range.push(transformType(item["@id"].replace("schema:", "")));
        }
        propType = range;
      }
      else {
        propType = transformType(property["schema:rangeIncludes"]["@id"].replace("schema:", ""));
      }
      
    }
    
    let propObj = {
      type: propType,
      documentation: {
        en : property["rdfs:comment"]  || ""
      }
    };



    outContent.properties[label] = propObj;

    
  }

  fs.writeFileSync(`${SCHEMA_DATA_MODEL_SRC_PATH}/${itemName.replace("schema:", "")}.yml`, yaml.stringify(outObj), 'utf-8');
}
 
run();