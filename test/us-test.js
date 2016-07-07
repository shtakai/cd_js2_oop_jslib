var assert = require('assert');
var expect = require('chai').expect;

var us = require('../lib/us.js');
var _ = us._

describe('filter', function(){
  var array,
      callback;

  before(function(){
    array = [1,2,3,4,5,6];

  })
  it('filters even array', function(){
    callback = function(num){
      return num % 2 == 0;
    }
    expect(_.filter(array, callback)).to.be.eql([2,4,6]);
  });

  it('returns the first "2" when find applies finding 2', function(){
    callback = function(num){
      return num % 2 ==0;
    }
    expect(_.find(array, callback)).to.be.equal(2);
  });
  it('returns null when find applies finding 100', function(){
    callback = function(num){
      return num % 100 ==0;
    }
    expect(_.find(array, callback)).to.be_null;
  });

  it('reject even array', function(){
    callback = function(num){
      return num % 2 == 0;
    }
    expect(_.reject(array, callback)).to.be.eql([1,3,5]);
  });

  it('returns the array that elements powered by 2', function(){
    callback = function(num){
      return num * num;
    }
    expect(_.map(array, callback)).to.be.eql([1,4,9,16,25,36]);
  });

  it('returns the sum of array', function(){
    callback = function(memo, num){
      return memo + num;
    }
    expect(_.reduce(array, callback)).to.be.eql(21);
  });

  it('returns the multiply of array from 1', function(){
    callback = function(memo, num){
      return memo * num;
    }
    expect(_.reduce(array, callback, 1)).to.be.eql(720);
  });

});
