const http = require('http');

const express = require('express'); // express are exporting a function

const app = express(); // we create a const that get/initialize the function that express is exporting


const server = http.createServer(app).listen(3000);