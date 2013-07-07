#!/usr/bin/env node

var buffer=new Buffer(10000)
var fs=require('fs')
var file = fs.openSync("index.html", "r")
var len = fs.readSync(file, buffer, 0, 10000, 0);
//console.log(buffer.toString('utf8', 0, len))

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
