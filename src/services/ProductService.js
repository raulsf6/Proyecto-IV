const fs = require('fs');
const path = require('path');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');


class ProductService{

    constructor(db){
        this.db = db;
    }

    getProduct(label){
        var prod = this.db.get('prods').find({label: label}).value();
        
        if (prod == null){
            var error = new Error("Product does not exist");
            error.status = 404;
            throw error;
        }
        
        return prod;
    }

    addProduct(product){
        
        if (this.db.get('prods').find({label: product.label}).isEmpty().value()){
            return this.db.get('prods').push(product).write();
        }
        else{
            var error = new Error("Product already exists");
            error.status = 400;
            throw error;
        }
    }

    updateProduct(product){
        if(!this.db.get('prods').find({label: product.label}).isEmpty().value())
            return this.db.get('prods').find({label: product.label}).assign(product).write();
        else{
            var error = new Error("Product does not exist");
            error.status = 404;
        
            throw error;
        }
    }

    deleteProduct(label){
        return this.db.get('prods').remove({label: label}).write();
    }
}

module.exports = ProductService;