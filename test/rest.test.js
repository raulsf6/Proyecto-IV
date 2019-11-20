var assert = require('assert');
var expect = require('chai').expect;
var app = require('../src/app');
var supertest = require('supertest');

var prod = {
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

var prod2 = {
    "label": "1111",
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

var prod3 = {
    "label": "00001",
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

describe('REST API', function () {
    
    
    describe('GET /prods/00001', function (){
        it('Should return 200 and a json object', function (done){
            supertest(app)
            .get('/prods/00001')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
        });
    });

    describe('POST /prods', function (){
        it('Should return 200 and a json object', function (done){
            supertest(app)
            .post('/prods')
            .send(prod)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
        });
    })

    describe('PUT /prods/:label', function (){
        it('Should return 200 and a json object', function (done){
            prod.brand = "findus"; 
            supertest(app)
            .put('/prods/00003')
            .send(prod)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, prod, done);
        });
    })

    describe('DELETE /prods/label', function (){
        it('Should return 200 and a json object', function (done){
            supertest(app)
            .delete('/prods/00003')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
        });
    })
});

describe('Error handling', function() {
    describe('Get product that does not exist', function(){
        it('Should return 404', function(done){
            supertest(app)
            .get('/prods/1111')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404, done);
        });
    });

    describe('Post product that already exist', function(){
        it('Should return 400', function(done){
            supertest(app)
            .post('/prods')
            .send(prod3)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(400, done);
        });
    });

    describe('Update product that does not exist', function(){
        it('Should return 404', function(done){
            supertest(app)
            .put('/prods/1111')
            .send(prod2)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404, done);
        });
    });

    describe('Delete product that does not exist', function(){
        it('Should return 404', function(done){
            supertest(app)
            .delete('/prods/1111')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404, done);
        });
    });

    describe('Bad request', function(){
        it('Should return 400', function(done){
            supertest(app)
            .post('/prods')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(400, done);
        });
    });
});