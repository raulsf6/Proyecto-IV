var assert = require('assert');
var expect = require('chai').expect;
var ProductService = require('../src/services/ProductService');
var db = require("../src/db/database");

prodservice = new ProductService(db);

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
    it('should create a full object', function() {

      var prod = prodservice.addProduct(product);
      expect(prod).to.exist;
      prod = prodservice.getProduct('00003');
      expect(prod).to.exist;

    });
  });

  
  describe('Update object with label 000003', function() {
    it('should update object with label 000003', function() {
      product.brand = "findus";
      prodservice.updateProduct(product);
    });
  });
  

  describe('Delete object with label 000003', function() {
    it('should delete object with label 000003', function() {
        
      prodservice.deleteProduct('00003');
      var prod;
      try {
        prod = prodservice.getProduct('00003');
      } catch (error) {
        expect(error.status).to.equal(404);
      }
    });
  });
  
});
