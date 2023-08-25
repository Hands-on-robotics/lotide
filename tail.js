
/**
 * tail Removes the first element in an array.
 * @param {array} array Is required.
 * @returns {array -1} The array without the first element.
 */
const tail = function(array) {
  return array.slice(1);
};

/**
 * assertEqual Checks for the strict equality of two variables and gives a flashy Passed: or Failed: output.
 * @param {variable} actual Is compared with expected.
 * @param {variable} expected Is compared with actual.
 * @returns {string} Notifies of pass or fail.
 */
const assertEqual = function(actual, expected) {

  // Emojis for Pass, to make the output more readable.
  const checkMarkEmojiTimes3 = "✅ ✅ ✅";
  // Emojis for Fail.
  const crossMarkEmojiTimes3 = "❌ ❌ ❌";
  
  // Returns Pass message with exact match.
  if (actual === expected) {
    return `${checkMarkEmojiTimes3} Assertion Passed: ${actual} === ${expected}`;
  } else {
    // Or shows Fail message.
    return `${crossMarkEmojiTimes3} Assertion Failed: ${actual} !== ${expected}`;
  }
};
