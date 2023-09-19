
const eqArrays = require('./eqArrays');

/**
 * assertArraysEqual Checks for the strict equality of elements and length between two arrays and gives a flashy Passed: or Failed: output.
 * @param {array} actual To compare.
 * @param {array} expected To compare.
 * @returns {boolean} Truth of strict equality between arrays elements and length.
 */
const assertArraysEqual = function(actual, expected) {

  // Emojis for Pass.
  const checkMarkEmojiTimes3 = "✅ ✅ ✅";
  // Emojis for Fail.
  const crossMarkEmojiTimes3 = "❌ ❌ ❌";
  
  // Evaluates if arrays are the same and returns a boolean value, with a Pass or Fail console message.
  if (eqArrays(actual, expected)) {
    console.log(`${checkMarkEmojiTimes3} Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // Or shows Fail message.
    console.log(`${crossMarkEmojiTimes3} Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertArraysEqual;