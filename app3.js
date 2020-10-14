// 1. external modules
const axios = require('axios');
axios.get('https://randomuser.me/api/?results=50')
.then(res=>{
console.log("uspesno", res)
})
.catch(err=>{
console.log("greska", err)
})

// 2. external modules
var Local = require('local')
var local = new Local()
local.ready(SET)
function SET(){
    local
    .set('HELLO')
    .in('SPANISH')
    .to('HOLA')
    .catch(errors)
    .then(GET)
}
function GET(){
    local
    .get('HELLO')
    .in('SPANISH')
    .catch(errors)
    .then(DISPLAY)
}
 
function DISPLAY(translation){
    console.log(translation) // -> HOLA
}
 
function errors(err){
    console.error(err)
}

// 3. external modules
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);