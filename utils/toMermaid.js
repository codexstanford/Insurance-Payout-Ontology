const fs = require('fs');
const yaml = require('yaml');
const execSync = require('child_process').execSync;
const DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src`;
const DATA_MODEL_MERMAID_PATH = `${__dirname}/../datamodel-build/mermaid`;

// document.querySelectorAll("svg g .divider:last-of-type").forEach(e => e.remove());



// remove old build
if (fs.existsSync(DATA_MODEL_MERMAID_PATH)) {
  fs.rmdirSync(DATA_MODEL_MERMAID_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_MERMAID_PATH);

// for each object, build the TS

let objectsList = fs.readdirSync(DATA_MODEL_SRC_PATH);
let output = "classDiagram";
for (let file of objectsList) {
  // skip dot files
  if (file[0] == '.') {
    continue;
  }

  output += buildMermaid(file);
}

  fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/diagram.mmd`, output, 'utf8');


let html = `
<html>
    <body>
<div class="mermaid">

${output.replace(/</g, '&lt').replace(/>/g, '&gt')}



</div>
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
mermaid.initialize({startOnLoad:true});
</script>


<script>
setTimeout(function() {
  document.querySelectorAll("svg g .divider:last-of-type").forEach(e => e.remove());
}, 100);
</script>
</body>
</html>
`;

fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/diagram.html`, html, 'utf8');


execSync(`mmdc -i ${DATA_MODEL_MERMAID_PATH}/diagram.mmd -o ${DATA_MODEL_MERMAID_PATH}/diagram.svg`);

fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/diagram.svg`, styleIt(
  fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/diagram.svg`, 'utf8')
));

function buildMermaid(fileName) {
  console.log(`----
  ${fileName}
  `)
  let data = yaml.parse(fs.readFileSync(`${DATA_MODEL_SRC_PATH}/${fileName}`, 'utf-8'));

  console.log(JSON.stringify(data, null, 2));

  let output  = `
`;
  for (let ObjName in data) {

  
    output += render(ObjName, data[ObjName])


  }

  return output;
}

function render(name, data) {
  if (data.type == 'object') {
    return renderObject(name, data)
  } 
  
  if (data.type == 'enum') {
    return renderEnum(name, data)
  }

  if (!data.type) {
    console.error(`Error Unspecified Object ${name} (no type property).`)
    throw (`Error Unspecified Object ${name} (no type property).`);
  }

}

function renderObject(name, data) {


  let output = "";

  if (data.inherit) {
    output += `${data.inherit} <|-- ${name}
  `;
  }

  output += `class ${name}`;

  

  output += ` {
`;

  if (data.abstract) {
    output += `<<abstract>>
`
  }
  let typeList = {};
  for (let propertyName in data.properties) {
    let property = data.properties[propertyName];
    if (property.type == "List") {
      output += `
  ${property.of}[] ${propertyName}`;
      typeList[property.of] = true;
    }
    else {
      output += `
  ${property.type} ${propertyName}`;
     typeList[property.type] = true;
    }
    


  }

  let importStmt = "";

  let systemType = {
    boolean : true,
    string: true,
    any : true,
    number: true,
    List: true
  }
  
  for (let type in typeList) {
    if (systemType[type]) {
      continue;
    }
    importStmt += `${name} -- ${type}
`;
  }

  output = `${importStmt}

${output}

}
`

  fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.mmd`, `classDiagram
  ${output}`);
execSync(`mmdc -i ${DATA_MODEL_MERMAID_PATH}/${name}.mmd -o ${DATA_MODEL_MERMAID_PATH}/${name}.svg`);
fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`, styleIt(
  fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`, 'utf8')
));
  return output;
}

function renderEnum(name, data) {
  let output = "";
  if (data.inherit) {
    output += `${data.inherit} o-- ${name}
  `;
  }
  output += `class ${name} {
<<enumeration>>
`

  for (let value in data.values) {
    output += `  o ${value}
`
  }

  output += `}
`;


fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.mmd`, `classDiagram
${output}`);
execSync(`mmdc -i ${DATA_MODEL_MERMAID_PATH}/${name}.mmd -o ${DATA_MODEL_MERMAID_PATH}/${name}.svg`);

fs.writeFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`, styleIt(
  fs.readFileSync(`${DATA_MODEL_MERMAID_PATH}/${name}.svg`, 'utf8')
));

 // fs.writeFileSync(`${DATA_MODEL_TS_PATH}/${name}.ts`, output, 'utf8');

  return output;
}

function styleIt(svg) {

  //background
  svg = svg.replace(/ECECFF/g, "eeeeee");
  svg = svg.replace(/9370DB/g, "222222");

  return svg;
}