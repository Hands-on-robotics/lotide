
/**
 * assertEqual Checks for the strict equality of two variables and console logs a flashy Passed: or Failed: output.
 * @param {variable} actual Is compared with expected.
 * @param {variable} expected Is compared with actual.
 * @returns {boolean} Pass or fail.
 */
const assertEqual = function(actual, expected) {

  // Emojis for Pass, to make the output more readable.
  const checkMarkEmojiTimes3 = "✅ ✅ ✅";
  // Emojis for Fail.
  const crossMarkEmojiTimes3 = "❌ ❌ ❌";

  // Returns Pass message with exact match.
  if (actual === expected) {
    console.log(`${checkMarkEmojiTimes3} Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // Or shows Fail message.
    console.log(`${crossMarkEmojiTimes3} Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

/**
 *
 * @param {array} allItems The items to sort through.
 * @param {object} itemsToCount
 * @returns {object} Items counted.
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    
    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }
  return results;
};

