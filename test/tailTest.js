
// tailTest.js

const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("Should return est for best", () => {
    assert.deepEqual(tail("best"), "est");
  });
  it("Should return 't' for 'st'", () => {
    assert.deepEqual(tail("st"), "t");
  });
  it("Should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
