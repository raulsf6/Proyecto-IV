var express = require('express');
var db = require('../db/database');
var ProductService = require('../services/ProductService');

var router = express.Router();
var prodService = new ProductService(db)


router.get('/prods/:label', function(req, res, next) {
    var label = req.params.label;
    
    try {
        var prod = prodService.getProduct(label);
    } catch (error) {
        next(error);
        return;
    }
    
    res.status(200).contentType('application/json').send(prod);
});

router.post('/prods', async function(req, res, next) {
    var prod = req.body;
    
    try {
        await prodService.addProduct(prod);
    } catch (error) {
        next(error);
        return;
    }
    
    res.status(200).contentType('application/json').send(prod);
});

router.put('/prods/:label', function(req, res, next){
    var label = req.params.label;
    var prod = req.body;
    
    try {
        prodService.updateProduct(prod);
    } catch (error) {
        next(error);
        return;
    }
    
    res.status(200).contentType('application/json').send(prod);
});

router.delete('/prods/:label', function(req, res, next){
    var label = req.params.label;
    prodService.deleteProduct(label);
    
    res.status(200).contentType('application/json').send({"message": "Deleted object"});
});
  

module.exports = router;