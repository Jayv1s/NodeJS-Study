const express = require('express'); //import express that I installed as a global dep.

const app = express(); //using express as a function

app.use((req, res, next) => {
    console.log("First middleware!");
    next(); // passing from this middleware to second
});

app.use((req, res, next) => {
    console.log("Second middleware!");
    next(); // passing from this middleware to the others paths
});

app.use('/users', (req, res, next) => {
    console.log("This is from my '/users' path!!");
    res.send("<h2>Hello from <b>USERS!</b></h2>");
});

app.use('/' /* my default path */, (req, res, next) => {
    console.log("Just '/' path!");
});

app.listen(3001); // localhost:3001