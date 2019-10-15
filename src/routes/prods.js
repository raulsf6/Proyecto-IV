var express = require('express');
var db = require('../db/database');
var ProductService = require('../services/ProductService');

var router = express.Router();
var prodService = new ProductService(db)

// POST a product.
router.post('/prods', function(req, res, next) {
    var prod = req.body;
    try {
        prodService.addProduct(prod);
    } catch (error) {
        next(error);
    }
    res.status(200).send(prod);
    return;
});

router.get('/prods/:label', function(req, res, next) {
    var label = req.params.label;
    try {
        var prod = prodService.getProduct(label);
    } catch (error) {
        next(error);
        return;
    }

    res.status(200).send(prod);
    return;
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
    res.status(200).send(prod);
});

router.delete('/prods/:label', function(req, res, next){
    var label = req.params.label;
    prodService.deleteProduct(label);
    res.status(200).send("Deleted object");
});
  


module.exports = router;