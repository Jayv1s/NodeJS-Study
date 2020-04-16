const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add products',
    path: '/admin/add-product'
  }); // res.render('file that I want to render', 'variables' );
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title, price: req.body.price, description: req.body.description }); // I'm adding the title that I recieve from user in an array
  res.redirect('/');
});

// module.exports = router;

exports.routes = router;
exports.products = products;
