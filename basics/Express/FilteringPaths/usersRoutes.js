const { Router } = require('express');
const routes = Router();

routes.get('/lists', (req,res) => {
    res.send("<h1> Lists </h1>");
});

routes.get('/products', (req,res) => {
    res.send("<h1> Products </h1>");
});

module.exports = routes;