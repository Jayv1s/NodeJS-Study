const fs = require('fs');
const path = require('path');

const productPath = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
)

const getProductsFromFile = (callback) => {
    fs.readFile(productPath, (err, fileContent) => {
        if(err) {
            return callback([])
        } else {
            callback(JSON.parse(fileContent));
        } 
    })
}

module.exports = class Product {
    constructor(title, price, description, img) { //The constructor is responsible to initialize my class when I a call "Product = new Product()"
        this.title = title; //this. is using to refer to the local proprieties of the class
        this.price = price;
        this.description = description;
        this.img = img;
    }

    //push to the array
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productPath, JSON.stringify(products), (err) => {
                console.error(err);
            });
        });
    }

    // search/return my array
    static  fetchAll(callback) { 
        getProductsFromFile(callback);
    }
}