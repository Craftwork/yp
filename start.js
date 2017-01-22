'use strict';

const http = require('http');
// const fs = require('fs');

const ns = require('node-static');
const pub = new ns.Server("./pub");
const PORT = 80;

const server = http.createServer(function(request, response) {
	request.addListener('end', function() {
		pub.serve(request, response);
	}).resume();
});

console.log("Listening to :" + PORT);
server.listen(PORT);
