
/**
 *  head gives the first element of an array.
 * @param {array} singleArray Is the array given.
 * @returns {element} The first element of singleArray.
 */
const head = function(singleArray) {
  return singleArray[0];
};

/**
 * assertEqual checks for the strict equality of two variables and gives a flashy Passed: or Failed: output.
 * @param {variable} actual Is compared with expected.
 * @param {variable} expected Is compared with actual.
 * @returns {string} Notifies of pass or fail.
 */
const assertEqual = function(actual, expected) {

  // Emojis for success to make the output more readable
  const checkMarkEmojiTimes3 = "\u{2705} \u{2705} \u{2705}";
  // Emojis for fail
  const crossMarkEmojiTimes3 = "\u{274C} \u{274C} \u{274C}";

  // If True Assertion show Pass message
  if (actual === expected) {
    return `${checkMarkEmojiTimes3} Assertion Passed: ${actual} === ${expected}`;
  } else {
    // Else False and show Fail message
    return `${crossMarkEmojiTimes3} Assertion Failed: ${actual} !==  ${expected}`;
  }
};
