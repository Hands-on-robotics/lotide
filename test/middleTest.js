// middleTest.js

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {
  it("Should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), true);
  });
  it("Should return [2] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true);
  });
  it("Should return an empty array for [1, 2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []), true);
  });
  it("Should return an empty array for [1]", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []), true);
  });
});
