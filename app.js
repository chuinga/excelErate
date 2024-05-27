// Import dependencies
const XLSX = require('xlsx');
const jsontoxml = require('jsontoxml');

// Read the file into memory
// const workbook = XLSX.read(fs.readFileSync('file-example.xlsx'));
const workbook = XLSX.readFile('file-example.xlsx');
