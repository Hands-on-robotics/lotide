

/**
 * findKeyByValue Returns the key of an object by the value given.
 * @param {object} object To search.
 * @param {value} value To look for.
 * @returns {string} the key found at the value's location.
 */
const findKeyByValue = function(object, value) {
  // Object.keys(object) turns the object keys into an array.
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
