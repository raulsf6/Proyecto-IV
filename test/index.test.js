var assert = require('assert');
var request = require('request');
var expect = require('chai').expect;
var server = require('../src/bin/www');
var prodservice = require('../src/services/ProductService');

describe('Storage handler', function() {
  describe('Get object with label 00001', function() {
    it('should return object with label 00001', function(done) {
        var prod = prodservice.getProduct('00001');
        expect(prod).to.exist;
        expect(prod.label).to.equal('00001');
        done();
    });
  });

  
  describe('Set object with label 000003', function() {
    it('should create a full object', function(done) {
        product = {
          "label": "00003",
          "nutritional": {
            "energy": 15,
            "fat": 12,
            "carbohydrates": 7,
            "proteins": 16
          },
          "brand": "gallo",
          "allergens": [
          ]
        }
        prod = prodservice.addProduct(product);
        expect(prod).to.exist;
        prod = prodservice.getProduct('00003');
        expect(prod).to.exist;
        done();
    });
  });

  /*
  describe('Update object with label 000002', function() {
    it('should update object wuth label 000002', function(done) {
        
    });
  });
  */

  describe('Delete object with label 000003', function() {
    it('should delete object wuth label 000003', function(done) {
        prodservice.deleteProduct('00003');
        done();
    });
  });
  
});
