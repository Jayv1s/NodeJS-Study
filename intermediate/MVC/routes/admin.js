const path = require('path');

const {Router} = require('express');

const routes = Router();


routes.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views','add-product.html'))
});
routes.post('/add-product', (req, res) => {
    res.redirect('/');
});


module.exports = routes;