const fs = require('fs');

const escape = require('escape-html');

const loadObjFromSrc  = require('./lib/loadObjFromSrc.js');
const injectInheritedProperties  = require('./lib/injectInheritedProperties.js');
let objectsList = injectInheritedProperties(loadObjFromSrc());


const DATA_MODEL_DOC_PATH = `${__dirname}/../docs`;
const DATA_MODEL_MERMAID_PATH = `${__dirname}/../datamodel-build/mermaid`;
const DATA_MODEL_TPL_PATH = `${__dirname}/../data-model-web-doc-template`;

console.log("...Building doc")

// remove old build
if (fs.existsSync(DATA_MODEL_DOC_PATH)) {
  fs.rmSync(DATA_MODEL_DOC_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_DOC_PATH);


let template = fs.readFileSync(`${DATA_MODEL_TPL_PATH}/index.html`, 'utf-8');

// build home

let home = fs.readFileSync(`${DATA_MODEL_TPL_PATH}/home.html`, 'utf-8');
home = template.replace('<!--$$_CONTENT_-->', home);
home = home.replace('MAIN_SVG_DIAGRAM_IMG', fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/diagram.svg`, 'utf8'));

fs.writeFileSync(`${DATA_MODEL_DOC_PATH}/index.html`, home);




// first Index ALl
let INDEX = {
    
};

let CAT_INDEX = {
    
};
let DM_INDEX = "";

function buildIndex() {

  let index = {

  }
  let indexToFile = {

  };
  for (let file of objectsList) {

    let data = file.data;
    let objName =  file.name;
    
    INDEX[objName] = data[objName];

    INDEX[objName].namespace = file.namespace;

    if (!index[file.namespace]) {
      index[file.namespace] = "";
      indexToFile[file.namespace] = objName;
    }

    index[file.namespace] += `<li><a href="${objName}.html" class="d-inline-flex text-decoration-none subLink namedLink${objName}">${objName}</a></li><!--SUBMENU_${objName}-->`;
  }

  for (let catName in index) {
    DM_INDEX += `
    <li> <span class='d-inline-flex text-decoration-none menuCategory'>${catName}</span></li> 
    ${index[catName]}`;
    CAT_INDEX[catName] = '';
    for (let allCatName in index) {
      CAT_INDEX[catName] += `
      <li> <a  href="${indexToFile[allCatName]}.html" class='d-inline-flex text-decoration-none menuCategory'>${allCatName}</a></li>`
      if (allCatName == catName) {
        CAT_INDEX[catName] += `${index[catName]}`;
      }

    }
  }
 

  for (let objName in INDEX) {

    let obj = INDEX[objName];
    for (let propertyName in obj.properties) {
      let property = obj.properties[propertyName];
      let targetType = property.type;
      if (targetType == "List") {
        targetType = property.of;
      }
      if (INDEX[targetType]) {
        if (!INDEX[targetType].refs) {
          INDEX[targetType].refs = [];
        }
        INDEX[targetType].refs.push([objName, propertyName]);
      }
    }
  }

  


}
buildIndex();


for (let key in INDEX) {
 
  buildObjDoc(key);
}

function toHTML(text) {
  return text
    .replaceAll(/\[\[(?<Path>[a-zA-Z0-9]*)\]\]/g, '<a href="$<Path>.html">$<Path></a>')
    .replace('$$$', ' $ $ $ ')
    .replace(/\\n/g, "<br/>")
}

function getText(item, field) {
  // Todo make it configurable

  let lang = "en";
  if (!item[field]) {
    return `Todo: describe ${field}`;
  }

  if (typeof item[field] == "object") {
    if (!item[field][lang]) {
      return `Missing transaltion for ${field}`;
    }
   
    return toHTML(item[field][lang]);
  }

  

  return toHTML(item[field]);

}


function buildObjDoc(objName) {
 
  let name =  objName;
  let data = INDEX[objName];
  let doc = "";

  if (data.inherit) {
    if (typeof data.inherit == "string") {
      doc += `<h1>${name} <span style="font-size: 16px"> implement <a href="${data.inherit}.html">${data.inherit}</a></span></h1>`;
    }
    else {
      doc += `<h1>${name} <span style="font-size: 16px"> implement </span>`;
      for (let inherit of data.inherit) {
        doc += ` <span style="font-size: 16px"><a href="${inherit}.html">${inherit}</a></span>`
      }
      
      doc += `</h1>`;
    }
   
  } else {
    doc += `<h1>${name}</h1>`;
  }
  
  doc += `
    <span class="badge text-bg-secondary">${data.type}</span>
    `;
  
   
    
    doc += `<p class='documentation'>${getText(data, 'documentation')}</p>
  `




  
  if (data.type !== 'system') {
    if (!fs.existsSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`)) {
      console.warn(`Missing svg schema : ${DATA_MODEL_MERMAID_PATH}/${name}.svg}`);
    }
    else {
      doc += fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`,'utf8')
    }
  }

  let PROP_MENU = "";
  if (data.type == 'object') { 

  

    doc += "<div>";

    doc += "<h2>Properties</h2>"
    doc += renderPropertiesDoc(data)
    doc += "</div>";

    for (let prop in data.properties) {
      PROP_MENU += `
<li><a href="${objName}.html#${prop}" class="d-inline-flex text-decoration-none subLink2">${prop}</a></li>`
    }
  }

  if (data.type == 'enum') { 
    doc += "<div>";
    doc += "<h2>Values</h2>"
    doc += renderValuesDoc(data)
    doc += "</div>";
  }

  if (data.sample) {
    doc += "<h2>Samples</h2>";

    for (let sampleKey in data.sample) {
      let sample = data.sample[sampleKey];

      doc += renderSample(sample)
    }
  }

  if (data.refs) {
    doc += "<h2>References</h2>";

    for (let ref of data.refs) {
      doc += `<div><a href="${ref[0]}.html#${ref[1]}"> ${ref[0]}:${ref[1]}</a></div>`;
    }
  }
    
  
  
  fs.writeFileSync(`${DATA_MODEL_DOC_PATH}/${name}.html`, 
  template
    .replace('<!--$$_CONTENT_-->', "<!--contentInhjection-->" + doc)
    .replace('<!--$$DM_INDEX-->', "<!--DM_INDEX-->" + CAT_INDEX[data.namespace])
    .replace(`namedLink${name}`, 'activeLink')
    .replace(`<!--SUBMENU_${name}-->`, "<!--$$SUBMENU_-->" +   PROP_MENU)
    , 
  'utf-8');

 
  
}


function renderSample(sample) {
  let sampleRender =  `
    <div class='sampleTitle'>Sample: ${sample.name}</div>
    <div class="sample">
      <div class="sampleExample">
      ${sample.legalese}
      </div>
      <div class="sampleExplanation">
      ${sample.explanation}`;
      
    if (sample.table) {
      sampleRender += `<table class="table bd-callout">
      <thead><tr>
      <th scope="col">key</th>
      <th scope="col">value</th></tr><tbody>`;

      for (let key in sample.table) {
      
      
        sampleRender += `<tr><td>${key} </td><td> ${sample.table[key]}</td></tr>`;
    
      }
      sampleRender += "</tbody></table>";
    }

    sampleRender +=` 
      </div>
    </div>`;
  return sampleRender;
}

function renderPropertiesDoc(data) {
  let doc = "";
  for (let propertyName in data.properties) {

    let property = data.properties[propertyName];
    
    doc += `
  <div id="${propertyName}">
    <h3>${propertyName}`;
    
    if (property.inherited) {
      doc +=  ` <span class="inheritedTag">inherited from <a href="${property.inherited}.html"> ${property.inherited} </a></span>`;
    }
    if (property.overloaded) {
      doc +=  ` <span  class="inheritedTag">overloading from ${property.overloaded}</span>`;
    }
    doc += `</h3>
    <div class="" >
`;

    let type = property.type;
    
    if (Array.isArray(type)) {

      doc +=  `<div class="type-info"><b>Type</b> `
      let tArray = [];
      for (let ttype of type) {
        tArray.push(`<a href="${ttype}.html"> ${ttype}</a>`);
      }
      doc += tArray.join(", ");
      
      doc += "</div>";

    }
    else {
      switch(type) {
        case "List":
          doc += `<div class="type-info"> <b>Type</b> List of <a href="${property.of}.html">${property.of}</a></div>`
        break;
        default:
          doc +=  `<div class="type-info"><b>Type</b> <a href="${property.type}.html"> ${property.type}</a></div>`
      }
    }
    
   
    if (property.with) {
      doc += `<div class="type-info"> <b>with:</b>`
      for (let withKey in property.with) {
        doc += `<div class="with-prop">
        <a href="${property.type}.html#${withKey}">
        ${property.type}.<b>${withKey}</b>
        </a> as `;
        let values = property.with[withKey].split('.');
        if (INDEX[values[0]].type == "enum") {
          doc +=  `<a href="${values[0]}.html#${values[1]}">
            ${property.with[withKey].replace('.', ".<b>")}
          </b></a>`
        }
        else {
          doc +=  property.with[withKey];
        }
       
        
        doc += `</div>`;
      }
      doc += `</div>`
    }

    if (property.default) {
      doc += `<div class="default-info"> <b>Default Value</b> ${property.default}</div>`
    }

    doc += `<p class="documentation">
    ${getText(property, 'documentation')}
    </p>   
`;   
    let props = [];
    for (let metadata in property) {
      if (metadata != "type" && metadata != "documentations") {
        props.push(metadata);
      }
    }
  
    if (property.sample) {
      for (let sampleKey in property.sample) {
        let sample = property.sample[sampleKey];

        doc += renderSample(sample)
      }


    }
  

    doc += '</div></div>';
  }
  return doc;
}



function renderValuesDoc(data) {
  let doc = "";
  for (let valueName in data.values) {


    
    doc += `
  <div id="${valueName}">
    <h3>${valueName}</h3>`

    doc += `<p class="documentation">
        ${getText(data.values[valueName], 'documentation')}
        </p>   
    `;   


    doc += `<table class="table bd-callout">
    <thead><tr>
    <th scope="col">key</th>
    <th scope="col">value</th></tr><tbody>`
    for (let key in data.values[valueName]) {
    
      
      if (key != "documentation") {
        doc += `<tr><td>${key} </td><td> ${data.values[valueName][key]}</td></tr>`
      }
    }
    doc += "</tbody></table>"

    doc += '</div>';
  }
  return doc;
}