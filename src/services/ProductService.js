const fs = require('fs');
const path = require('path');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');


class ProductService{
    constructor(){
        const adapter = new FileAsync(path.join(__dirname, '../db/products.json'));
        (async () => {
            this.db = await low(adapter);
            this.db.defaults({ prods: []}).write();
        })()
    }

    getProduct(label){
        var prod = this.db.get('prods').find({label: label}).value();
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