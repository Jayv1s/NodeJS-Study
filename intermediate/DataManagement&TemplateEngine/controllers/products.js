const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
      pageTitle: 'Add products',
      path: '/admin/add-product'
    }); // res.render('file that I want to render', 'variables' );  
}
exports.postAddProduct = (req, res) => {
    const {title, price, description, img} = req.body;

    const product = new Product(title, price, description, img); //here I'm instantiating my class and passing the variables to the constructor
    product.save();
    res.redirect('/');
}
exports.getRenderProducts = (req,res) => {
    //because it's static, I don't need to instantiate again
    Product.fetchAll(products => {
        res.render('shop/product-list', { 
            pageTitle: 'Shop', // The page title
            prods: products, // My products array
            path: '/', // The url path
            hasProducts: products.length > 0, // My condition to show the list of products
            activeShop: true,
            productsCSS: true
        });
    }); 
}