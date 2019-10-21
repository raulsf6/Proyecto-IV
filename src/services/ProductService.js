const fs = require('fs');
const path = require('path');
const low = require('lowdb');
var Validator = require('jsonschema').Validator;


class ProductService{

    constructor(db){
        this.v = new Validator();
        this.db = db;
        this.schema = {
            "type":"object",
            "properties": {
                "label":{
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "nutritional": {
                    "type": "object",
                    "properties": {
                        "energy":{
                            "type": "number",
                            "minimum": 0,
                            "maximun": 100
                        },
                        "fat":{
                            "type": "number",
                            "minimum": 0,
                            "maximun": 100
                        },
                        "carbohydrates":{
                            "type": "number",
                            "minimum": 0,
                            "maximun": 100
                        },
                        "proteins":{
                            "type": "number",
                            "minimum": 0,
                            "maximun": 100
                        }
                    },
                    "required": ["energy", "fat", "carbohydrates", "proteins"]
                },
                "brand":{
                    "type": "string"
                },
                "allegerns": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": ["label", "name", "nutritional", "brand"]
        }
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

        this.validateprod(product);
        
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
        
        this.validateprod(product);
        
        if(!this.db.get('prods').find({label: product.label}).isEmpty().value())
            return this.db.get('prods').find({label: product.label}).assign(product).write();
        else{
            var error = new Error("Product does not exist");
            error.status = 404;
            throw error;
        }
    }

    deleteProduct(label){
        if (!this.db.get('prods').find({label: label}).isEmpty().value())
            return this.db.get('prods').remove({label: label}).write();
        else{
            var error = new Error("Product does not exist");
            error.status = 404;
            throw error;
        }

            
    }

    validateprod(product){
        var errors = this.v.validate(product, this.schema).errors;
        console.log(errors);
        if (errors.length != 0){
            var message = []
            errors.forEach((err) => {
                message.push(err.toString());
            });
            var error = new Error(message);
            error.status = 400;
            throw error;
        }
    }
}

module.exports = ProductService;