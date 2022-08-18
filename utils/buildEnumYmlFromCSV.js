const csv = require('csv-parser')
const fs = require('fs')
const results = [];

if (process.argv.length != 4) {
  console.log(`Usage:
node buildEnumFromCsv.js <cvsPath> <primaryKeyColumnName>  
`)
  return;
}
// usage :

let header = fs.readFileSync(`${__dirname}/${process.argv[2].replace('.csv', '.yml')}`, 'utf8');

console.log(header);
fs.createReadStream(`${__dirname}/${process.argv[2]}`)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
   
   
    for (let row of results) {
        console.log(`    ${row[process.argv[3]]}:`);

        let obj = {};

        for (let key in row) {
          console.log(`      ${key}: "${row[key]}"`)
        }

    }


});