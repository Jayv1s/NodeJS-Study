const express = require('express');

const app = express();


const routes = require('./routes'); //recieving my routes from another part of my project
const anotherRoutes = require('./app'); // recieving another routes

app.use(routes); //using my routes as middlewares
app.use(anotherRoutes); //using my routes as middlewares

app.use((req,res) =>{ //if none of my middlewares treat the request, I can treat it here
    res.status(404).send("<h1>Page not found!</h1>") //for exemplo, in this line I'm send a message if the page that user tryed to acess doesn't exist
})

app.listen(3001);