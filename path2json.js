const xmlFilePath = require('./path').path;
let arrOfJsonPath = xmlFilePath.slice(0, -3) + 'js';

module.exports = arrOfJsonPath;