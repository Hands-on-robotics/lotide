
/**
 * assertArraysEqual Checks for the strict equality across two arrays and gives a flashy Passed: or Failed: output.
 * @param {array} actual Is compared with expected.
 * @param {array} expected Is compared with actual.
 * @returns {boolean} Pass or fail.
 */
const assertArraysEqual = function(actual, expected) {

  // Emojis for Pass, to make the output more readable.
  const checkMarkEmojiTimes3 = "✅ ✅ ✅";
  // Emojis for Fail.
  const crossMarkEmojiTimes3 = "❌ ❌ ❌";
  
  // Returns Pass message with exact match.
  if (eqArrays(actual, expected) === true) {
    //console.log(eqArrays(actual, expected));
    console.log(`${checkMarkEmojiTimes3} Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // Or shows Fail message.
    console.log(`${crossMarkEmojiTimes3} Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

/**
 * eqArrays checks if two arrays are identical and returns a true or false.
 * @param {array} firstArray Is compared with secondArray.
 * @param {array} secondArray Is compared with firstArray.
 * @returns {boolean} true or false comparison.
 */
const eqArrays = function(firstArray, secondArray) {
  // Return false if both arrays are different lengths.
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  // Return false and exit if any elements do not strictly match.
  for (const element of firstArray) {
    if (firstArray[element] !== secondArray[element]) {
      return false;
    }
  }
  return true;
};
