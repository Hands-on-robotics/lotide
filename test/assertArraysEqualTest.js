// assertArraysEqualTest.js

const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns Assertion Passed! for [1, 2, 3, 4], [1, 2, 3, 4]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });
  it("returns Assertion Failed! for [1, 2, 3, 4], [1, 2, 3, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 3]), false);
  });
});

