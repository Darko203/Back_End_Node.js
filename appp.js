// 1.core modules
var fs = require('fs');
fs.writeFileSync("core.txt","core is good");
console.log(fs.readFileSync("core.txt").toString());

// 2.core modules
var path = require('path');
var websiteHome ="file:///C:/Users/PC/Desktop/HTML,%20CSS/index.html";
console.log(path.normalize(websiteHome));

// 3.core modules
var url = require('url');
const urlLink ="https://www.youtube.com/watch?v=gmYqpbeCyZk";
var urlObj = url.parse(urlLink);
console.log(urlObj.port);
console.log(urlObj.query);
console.log(urlObj.pathname);