
// tailTest.js

const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("Should return est for best", () => {
    assert.strictEqual(tail("best"), "est");
  });
  it("Should return 't' for 'st'", () => {
    assert.strictEqual(tail("st"), "t");
  });
});
