var http = require('http');
var net = require('net');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');
var server = http.createServer(function(req, res) {
    var dat = url.parse(req.url);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end('hello world');
});
server.listen(8080);
