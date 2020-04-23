const express = require('express');
const { getAddProduct, postAddProduct } = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAddProduct); //don't execute this function, just passs a reference

// /admin/add-product => POST
router.post('/add-product', postAddProduct); //don't execute this function, just passs a reference

module.exports = router;