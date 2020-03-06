const express = require('express'); // express are exporting a function

const app = express(); // we create a const that get/initialize the function that express is exporting

app.use((req, res, next) => {
    /* next() indica que o middleware pode seguir em frente para outro middleware;
        se não tiver next() no final, esse middleware será executado, porém os proximos não
    */
   console.log("A middleware!");
   next();
});

app.use((req, res, next) => {
   console.log("Another middleware!");
   res.send('<h1>Hello middlewares!</h1>') //.send() works like write, but better! You don't need to set header or stuffs like that
});

app.listen(3000); //The express create a server (if doesn't exist) by default