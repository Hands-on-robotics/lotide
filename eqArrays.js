
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
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;