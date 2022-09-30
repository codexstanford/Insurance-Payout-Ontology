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

fs.createReadStream(`${__dirname}/${process.argv[2]}`)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
   
   
    for (let row of results) {
        console.log(`    ${row[process.argv[3]]}:`);

        let obj = {};

        for (let key in row) {
          // is not digit
          if ("0123456789".indexOf(row[key][0]) == -1) {
            console.log(`      ${key}: "${row[key]}"`)
          }
          else {
            console.log(`      ${key}: ${row[key]}`)
          }
        
        }

    }


});