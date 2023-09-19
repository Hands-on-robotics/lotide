
const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;
