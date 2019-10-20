var assert = require('assert');
var expect = require('chai').expect;
var app = require('../src/app');
var supertest = require('supertest');

describe('REST API', function () {

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
    }
    
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