// test/assertEqualTest.js

const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("Should return true for 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it("Should return true for 'labs', 'labs'", () => {
    assert.strictEqual(assertEqual("labs", "labs"), true);
  });
  it("Should return false for 'lighthouse', 'labs'", () => {
    assert.strictEqual(assertEqual("lighthouse", "labs"), false);
  });
});

