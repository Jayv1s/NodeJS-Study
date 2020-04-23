const express = require('express');

const { getRenderProducts } = require('../controllers/products');

const router = express.Router();

router.get('/', getRenderProducts);

module.exports = router;
