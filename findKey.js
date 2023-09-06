
/**
 * findKey returns a single key from an object using the truthy value of a callback.
 * @param {object} object To be checked for key.
 * @param {callback} callback Function used to find key with a truthy value.
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

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma";