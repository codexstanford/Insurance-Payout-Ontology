const fs = require('fs');
const loadObjFromSrc  = require('./lib/loadObjFromSrc.js');
const injectInheritedProperties  = require('./lib/injectInheritedProperties.js');

const DATA_MODEL_SRC_PATH = `${__dirname}/../datamodel-src`;
const DATA_MODEL_EPILOG_PATH = `${__dirname}/../datamodel-build/epilog`;
console.log("...Building Epilog");

let objectsList = loadObjFromSrc();

// remove old build
if (fs.existsSync(DATA_MODEL_EPILOG_PATH)) {
  fs.rmSync(DATA_MODEL_EPILOG_PATH, { recursive: true });
}

fs.mkdirSync(DATA_MODEL_EPILOG_PATH);

for (const file of objectsList) {
  for (const name in file.data) {
    const rendered = render(name, file.data[name]);
    if (rendered) {
      fs.writeFileSync(
        `${DATA_MODEL_EPILOG_PATH}/${name}.epilog`,
        rendered,
        'utf8');
    }
  }
}

function render(name, data) {
  if (!data.type) throw (`Missing type for object ${name}`);
  if (data.type == 'object') return renderObject(name, data);
  if (data.type == 'enum') return renderEnum(name, data);
  return false;
}

function renderObject(name, data) {
  // TODO Handle abstract types
  let output = `type("${name}",class)`;

  let bases = [];
  if (data.inherit) {
    if (typeof data.inherit === 'string') {
      bases = [data.inherit];
    } else {
      bases = data.inherit;
    }
  }

  for (const base of bases) {
    output += `\ninherits("${name}","${base}")`;
  }

  for (const propName in (data.properties || [])) {
    const prop = data.properties[propName];
    const relationName = `"${name}.${propName}"`;

    output += `\nattribute("${name}",${relationName})`;

    output += `\ntype(${relationName},attributerelation)`;

    output += `\ndomain(${relationName},"${name}")`;

    if (prop.type === 'List') {
      output += `\nunique(${relationName},no)`;
      output += `\nrange(${relationName},${prop.of})`;
    } else {
      output += `\nunique(${relationName},yes)`;
      output += `\nrange(${relationName},${prop.type})`;
    }
  }

  // TODO Optional properties and total()

  return output;
}

function renderEnum(name, data) {
  if (!data.values) return false; // this is the case for an abstract enum

  return Object.keys(data.values)
    .map(value => {
      return `"${name}"("${value}")`;
    })
    .join('\n');
}
