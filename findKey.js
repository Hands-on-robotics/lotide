
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

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma";