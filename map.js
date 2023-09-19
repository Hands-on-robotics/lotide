
/**
 * map Uses a callback on an array to find truthy values and add them to the output array.
 * @param {array} array To use callback upon.
 * @param {callback} callback To add values to output array.
 * @returns {array} The truthy elements found by callback.
 */
const map = function(array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

module.exports = map;
