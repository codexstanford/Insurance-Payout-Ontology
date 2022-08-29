const fs = require('fs');
const yaml = require('yaml');


const DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src`;
const DATA_MODEL_DOC_PATH = `${__dirname}/../datamodel-build/doc`;
const DATA_MODEL_MERMAID_PATH = `${__dirname}/../datamodel-build/mermaid`;
const DATA_MODEL_TPL_PATH = `${__dirname}/../data-model-web-doc-template`;


// remove old build
if (fs.existsSync(DATA_MODEL_DOC_PATH)) {
  fs.rmdirSync(DATA_MODEL_DOC_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_DOC_PATH);



let template = fs.readFileSync(`${DATA_MODEL_TPL_PATH}/index.html`, 'utf-8');

// build home

let home = fs.readFileSync(`${DATA_MODEL_TPL_PATH}/home.html`, 'utf-8');
home = template.replace('$$CONTENT', home);
home = home.replace('MAIN_SVG_DIAGRAM_IMG', fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/diagram.svg`, 'utf8'));


fs.writeFileSync(`${DATA_MODEL_DOC_PATH}/index.html`, home);



// buidl individual docs
let objectsList = fs.readdirSync(DATA_MODEL_SRC_PATH);

// first Index ALl
let INDEX = {};
let DM_INDEX = "";
function buildIndex() {
  // indexAll
  for (let file of objectsList) {
    // skip dot files
    if (file[0] == '.') {
      continue;
    }
    let data = yaml.parse(fs.readFileSync(`${DATA_MODEL_SRC_PATH}/${file}`, 'utf-8'));
    let objName =  Object.keys(data)[0];
    INDEX[objName] = data[objName];
    DM_INDEX += `<li><a href="${objName}.html" class="link-dark d-inline-flex text-decoration-none subLink namedLink${objName}">${objName}</a></li><!--SUBMENU_${objName}-->`
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
    return item[field][lang];
  }

  return item[field];

}


function buildObjDoc(objName) {
 
  let name =  objName;
  let data = INDEX[objName];
  
  let doc = `
    <h1>${name}</h1>
    <p class="bd-callout"><b>Type</b> ${data.type}</p>
    <p class="bd-callout bd-callout-info">${getText(data, 'documentation')}</p>
  `

  doc += fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`,'utf8')

  let PROP_MENU = "";
  if (data.type == 'object') { 

   

    console.log(JSON.stringify(data, null, 2));
    doc += "<div>";
    doc += "<h2>Properties</h2>"
    doc += renderPropertiesDoc(data)
    doc += "</div>";

    for (let prop in data.properties) {
      PROP_MENU += `<li><a href="${objName}.html#${prop}" class="link-dark d-inline-flex text-decoration-none subLink2">${prop}</a></li>`
    }
  }

  if (data.type == 'enum') { 
    console.log(JSON.stringify(data, null, 2));
    doc += "<div>";
    doc += "<h2>Values</h2>"
    doc += renderValuesDoc(data)
    doc += "</div>";
  }

  

  if (data.refs) {
    doc += "<h2>References</h2>";

    for (let ref of data.refs) {
      doc += `<div><a href="${ref[0]}.html#${ref[1]}"> ${ref[0]}:${ref[1]}</a></div>`;
    }
  }
  


  fs.writeFileSync(`${DATA_MODEL_DOC_PATH}/${name}.html`, 
    template
      .replace('$$CONTENT', doc)
      .replace('<!--$$DM_INDEX-->', DM_INDEX)
      .replace(`namedLink${name}`, 'activeLink')
      .replace(`<!--SUBMENU_${name}-->`, PROP_MENU)
      
      , 
    'utf-8');
  
}


function renderPropertiesDoc(data) {
  let doc = "";
  for (let propertyName in data.properties) {

    let property = data.properties[propertyName];
    
    doc += `
  <div id="${propertyName}">
    <h3>${propertyName}</h3>
`

    let type = property.type;
    
    switch(type) {
      case "List":
        doc += `<p class="bd-callout"> <b>Type</b> List of <a href="${property.of}.html">${property.of}</a></p>`
      break;
      default:
        doc +=  `<p class="bd-callout"><b>Type</b> <a href="${property.type}.html"> ${property.type}</a></p>`
    }
   
    if (property.default) {
      doc += `<p class="bd-callout"> <b>Default Value</b> ${property.default}</p>`
    }

    doc += `<p class="bd-callout bd-callout-info">
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

        doc += `<p class="bd-callout">
          <b> ${sample.name} </b> : <br/>
          ${sample.legalese}<br/>
          ${sample.explanation}
        </p>`
      }


    }
  

    doc += '</div>';
  }
  return doc;
}



function renderValuesDoc(data) {
  let doc = "";
  for (let valueName in data.values) {


    
    doc += `
  <div>
    <h3>${valueName}</h3>`

    doc += `<p class="bd-callout bd-callout-info">
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