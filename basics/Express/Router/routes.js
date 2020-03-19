const {Router} = require('express');

const routes = Router();

routes.get('/', (req,res) => {
    res.send('<h1>Router is coming!</h1>');
});
routes.get('/test', (req,res) =>{
    res.send("<h1> It's really coming!!!</h1>");
});

module.exports = routes; //importing my routes to use in another part of the code