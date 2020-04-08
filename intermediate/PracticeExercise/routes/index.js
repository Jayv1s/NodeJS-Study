const {Router} = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const routes = Router();

routes.get('/', (req,res) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'home.html'));
});

routes.get('/other', (req,res) => {
    res.sendFile(path.join(rootDir, 'public', 'views', 'other.html'));
})

module.exports = routes;