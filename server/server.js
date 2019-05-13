const path = require('path');
const express = require('express');

console.log(__dirname+'/../public');
console.log(path.join(__dirname,'..','public'));

var adress = path.join(__dirname,'..','public');
const port = process.env.port || 3000;


var app = express();
app.use(express.static(adress));
app.listen(3000,()=>{
    console.log('server is up on port 3000');
});