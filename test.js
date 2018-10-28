
const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const { make, sum } = require('./src/make.js');


describe('CodeJam-3 CoreJS', function() {
  describe('function "sumOfOther"', function() {
    it('1', function(){
      assert.deepEqual([8, 7, 6, 9], sumOfOther([2, 3, 4, 1]));
    });
    it('2', function(){
      assert.deepEqual([ 1, 0, 1, 1 ], sumOfOther([0, 1, 0, 0]));
    });    
    it('3', function(){
      assert.deepEqual([ 5, 4, 4, 4, 4, 4 ], sumOfOther([0, 1, 1, 1, 1, 1]));
    });    
    it('4', function(){
      assert.deepEqual([ 412, 480, 513, 502, 491, 480, 524, 345, 534, 534 ], sumOfOther([123, 55, 22, 33, 44, 55, 11, 190, 1, 1]));
    });    
    it('5', function(){
      assert.deepEqual([0, 99, 99, 99, 99, 99, 99, 99], sumOfOther([99,0,0,0,0,0,0,0]));
    });
  });  
  describe('function "make"', function() {
    it('1', function(){
      assert.deepEqual(777,  make(15)(34, 21, 666)(41)(sum) );
    });  
    it('2', function(){
      assert.deepEqual(3,  make(1)(1)(1)(sum) );
    });  
    it('3', function(){
      assert.deepEqual(4444,  make(2222)(2222)(sum) );
    });
    it('4', function(){
      assert.deepEqual(6,  make(1,1,1,1,1,1)(sum) );
    });
    it('5', function(){
      assert.deepEqual(1221,  make(1,2,3,4,5,6)(100)(200)(100)(200)(100)(200)(100)(200)(sum) );
    });
  });
});

