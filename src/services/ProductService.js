const fs = require('fs');
const path = require('path');


class ProductService{
    constructor(){
        this.products = null;
        this.products = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/products.json')));
    }

    getProduct(label){
        let prod = null
        this.products.forEach(element => {
            if (label === element.label){
                prod = element;
                return
            }
        });

        return prod;
    }

    addProduct(product){

    }

    updateProduct(product){

    }

    deleteProduct(label){

    }
}


var handler = new ProductService();
module.exports = handler;