const express = require('express');

const products = require('./admin').products; // acessing the admin values;
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(products); // getting the products from admin
  //this isn't a good way, because the data have been shared across all users, if this data was a personal data, it would be terrible.
  //but now, I'll keep with that just for practice the data management logic.

  res.render('shop', { 
    pageTitle: 'Shop', // The page title
    prods: products, // My products array
    path: '/', // The url path
    hasProducts: products.length > 0, // My condition to show the list of products
    activeShop: true,
    productsCSS: true
  });
});

module.exports = router;
