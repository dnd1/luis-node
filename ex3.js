var fs = require('fs');
var content = fs.readFileSync(process.argv[2]);
var str = content.toString();
var result = str.split("\n").length - 1;
console.log(result);