
const fs = require("fs");
const buffer = fs.readFileSync("myFile.txt");
const fileContent = buffer.toString();
console.log(fileContent);

