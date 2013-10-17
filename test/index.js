var is = require('../istool');
var assert = require('assert');

// test object
var Person = function(firstName, lastName, yearOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function() {
    return firstName + " " + lastName;
  };

  this.getAge = function() {
    return (new Date()).getFullYear() - yearOfBirth;
  };
};

var persons = [
  new Person('daewon', 'jeong', 1982),
  new Person('John', 'McCarthy', 1927),
  new Person('Dennis', 'Ritchie', 1941),
  new Person('kenneth', 'Thompson', 1943),
  new Person('Frederick', 'Brooks', 1931),
  new Person('Donald', 'Knuth', 1938)
];

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('is.eq', function() {
  it('should equal', function() {
    assert.equal(is.eq('daewon')('daewon'), true);
    assert.equal(is.eq('daewon')('Dennis'), false);
    assert.deepEqual(nums.filter(is.eq(2)), [2]);
    assert.deepEqual(nums.filter(is.eq(10)), [10]);
  });
});

describe('is.ne', function() {
  it('should not equal', function() {
    assert.equal(is.ne('daewon')('Dennis'), true);
    assert.equal(is.ne('daewon')('daewon'), false);
    assert.deepEqual(nums.filter(is.ne(2)), [1, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(nums.filter(is.ne(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('is.peq', function() {
  it('should equal', function() {
    assert.deepEqual(persons.filter(is.peq('lastName', 'jeong')), [persons[0]]);
  });
});

describe('is.ieq', function() {
  it('should equal', function() {
    assert.deepEqual(persons.filter(is.ieq('getAge', 31)), [persons[0]]);
  });
});

describe('is.ieq', function() {
  it('should equal', function() {
    assert.deepEqual(persons.filter(is.ieq('getAge', 31)), [persons[0]]);
  });
});
