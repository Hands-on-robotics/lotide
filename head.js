
const assertEqual = require('./assertEqual');

/**
 *  head gives the first element of an array.
 * @param {array} singleArray Is the array given.
 * @returns {element} The first element of singleArray.
 */
const head = function(singleArray) {
  return singleArray[0];
};

module.exports = head;