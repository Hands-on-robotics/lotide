
const eqObjects = require('./eqObjects');

/**
 * assertObjectsEqual Checks that two objects have equal key names, values and length. Then returns a true or false with a flashy console Assertion Message.
 * @param {object} actual To compare.
 * @param {object} expected To compare.
 * @returns {boolean} As a statement of the equality length, keys and values.
 */
const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;

  const threeCheckMark = "✅✅✅";
  const threeCrossEmoji = "❌❌❌";

  if (!eqObjects(actual, expected)) {
    console.log(`${threeCrossEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

    return false;
  }
  
  console.log(`${threeCheckMark} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  return true;
};

module.exports = assertObjectsEqual;