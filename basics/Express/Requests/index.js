const express = require('express'); //import express that I installed as a global dep.
const bodyParser = require('body-parser');

const app = express(); //using express as a function
/*
    App.use => answer all kind of requests
    App.get => answer just "get" (usually to read) requests
    App.post => answer just "post" (usually to create) requests
    App.put => answer just "put" (usually to change) requests
    App.delete => answer just "delete" (usually to delete) request
*/

app.use(bodyParser.urlencoded({extended: false})); //an easy way to get the body from a request

app.use('/users', (req, res, next) => {
    res.send("<form action='/table' method='POST'><input type='text' name='title'><button type='submit' >Add user</button></form>");
});

app.post('/table', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/' /* my default path */, (req, res, next) => {
    res.send("<h1>Olá!</h1>");
    console.log("Just '/' path!");
});

app.listen(3001); // localhost:3001