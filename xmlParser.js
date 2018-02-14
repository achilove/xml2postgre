const parser = require('xml2json');
const fs = require('fs');
const xmlFilePath = require('./path').path;
const arrOfJsonPath = require('./path2json');



let xml = fs.readFileSync(xmlFilePath, 'utf8');
let json = parser.toJson(xml);

let begin = json.indexOf('[');
let end = json.indexOf(']');
end++;
let content = 'module.exports = ' + json.slice(begin,end);


fs.writeFile(arrOfJsonPath, content,'utf8', ()=>{
    console.log('XML was converted to Json, check the `files` folder');
})

