const { Router } = require('express');
const routes = Router();

routes.get('/test2', (req,res) => {
    res.send("<h1>Works here too!!!!!!!</h1>");
});

module.exports = routes;