const path = require('path');

const {Router} = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = routes;