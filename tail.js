
/**
 * tail Removes the first element in an array or string.
 * @param {array} array or string Is required.
 * @returns {array} The array or string without the first element.
 */
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;