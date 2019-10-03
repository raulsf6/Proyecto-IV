var assert = require('assert');
var request = require('request');
var expect = require('chai').expect;
var server = require('../src/bin/www');
var prodservice = require('../src/services/ProductService');

describe('Storage handler', function() {
  var product = {
    "label": "00003",
    "name": "spaghetti",
    "nutritional": {
      "energy": 15,
      "fat": 12,
      "carbohydrates": 7,
      "proteins": 16
    },
    "brand": "gallo",
    "allergens": [
    ]
  };

  describe('Get object with label 00001', function() {
    it('should return object with label 00001', function() {
        
      var prod = prodservice.getProduct('00001');
      expect(prod).to.exist;
      expect(prod.label).to.equal('00001');
      
    });
  });

  describe('Set object with label 000003', function() {
    it('should create a full object', async function() {

      prod = await prodservice.addProduct(product);
      expect(prod).to.exist;
      prod = prodservice.getProduct('00003');
      expect(prod).to.exist;

    });
  });

  
  describe('Update object with label 000002', function() {
    it('should update object with label 000002', async function() {
      product.brand = "findus";
      await prodservice.updateProduct(product);
    });
  });
  

  describe('Delete object with label 000003', function() {
    it('should delete object with label 000003', async function() {
        
      await prodservice.deleteProduct('00003');
      prod = prodservice.getProduct('00003');
      expect(prod).not.to.exist;
    });
  });
  
});
