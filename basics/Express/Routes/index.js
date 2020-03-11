const express = require('express');

const app = express();

app.use('/firstPath' /* I can pass a path before the handle function */, (req, res, next )=> {
    //this is a middleware
    console.log("Hi!")
    res.send('<h1> This is the page of first path!</h1>');

    //I'm not passing next() because I don't want the others path, just the path that the user choose
})

app.use('/anotherPath' /* I can pass a path before the handle function */, (req, res, next )=> {
    //this is a middleware
    console.log("Hi!")
    res.send('<h1>This is the page of another path!</h1>');
})

app.use('/' /* I can pass a path before the handle function */, (req, res, next )=> {
    //this is a middleware
    console.log("Hi!")
    res.send('<h1>This is my default path!</h1>')
})

app.listen(3001);