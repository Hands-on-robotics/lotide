
/**
 * findKey Returns a single key from an object as a string. findKey returns the first occurrence of a truthy value used in a callback.
 * @param {object} object Scanned for a key's value that matches the callback's truthy value.
 * @param {callback} callback To find the key with a truthy value.
 * @returns {string} Returns the key.
 */
const findKey = function(object, callback) {
  const keysArray = Object.keys(object);

  for (const key of keysArray) {

    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;