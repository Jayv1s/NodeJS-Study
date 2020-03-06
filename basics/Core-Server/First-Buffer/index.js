/*
    This code is just to understand the "raw logic" of request and NodeJS;
    This code write a .txt file with the input value from user.
*/

const http = require('http');  // import http modules
const listener = require('./routes');

const server = http.createServer(listener);
server.listen(8080); 