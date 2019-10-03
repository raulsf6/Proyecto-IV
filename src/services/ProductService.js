const fs = require('fs');
const path = require('path');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');


class ProductService{
    constructor(){
        const adapter = new FileAsync(path.join(__dirname, '../db/products.json'));
        (async () => {
            this.db = await low(adapter);
            await this.db.defaults({ prods: []}).write();
        })()
    }

    getProduct(label){
        var prod = this.db.get('prods').find({label: label}).value();
        return prod;
    }

    addProduct(product){
        
        if (this.db.get('prods').find({label: product.label}).isEmpty().value()){
            this.db.get('prods').push(product).write();
        }
        else{
            throw new Error("WRITE_ERROR: Porduct already exists");
        }
        return; 
    }

    updateProduct(product){

    }

    deleteProduct(label){
        this.db.get('prods').remove({label: product.label}).write();
    }
}


var handler = new ProductService();
module.exports = handler;