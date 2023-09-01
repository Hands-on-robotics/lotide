
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
  for (const i in firstArray) {
    console.log(i, firstArray[i], secondArray[i]);
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

/**
 * eqObjects returns true if both objects have identical keys with identical values.
 * @param {object} object1 First compared object.
 * @param {object} object2 Second compared object.
 * @returns {boolean} Truth of identical keys and identical values.
 */
const eqObjects = function(object1, object2) {
  // Checks if both objects have the same keys and length.
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
  
    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
    }

    if (value1 !== value2) {
      return false;
    }

  }
  return true;
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log("same shirts, keys in different places: ", assertEqual(eqObjects(shirtObject , anotherShirtObject), true)); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log("shirt and longSleeve: ",assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log("Values and Keys are the Same: ", assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log("Values and Keys are the Different: ", assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false));