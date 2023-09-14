// eqArraysTest.js

const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("Should return true and message Assertion Passed to console", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });
  it("Should return false and message Assertion Failed to console", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 3]), false);
  });
});
