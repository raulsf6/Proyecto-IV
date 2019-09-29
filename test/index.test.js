var assert = require('assert');
var request = require('request');
var server = require('../bin/www');

describe('Index', function() {
  describe('/GET', function() {
    it('should return 200', function() {
        request.get("http://localhost:3000", (err, res, bod) => {
            assert.equal(res.statusCode, 200);
        });    
    });
  });
});