
/**
 * middle returns an array of one or two elements found in the middle of the original array.
 * @param {array} array The middle elements will be taken from here.
 * @returns {array} Returns one or two elements found in the middle of the array.
 */
const middle = function(array) {
  const middleElementsFound = [];
  const indexOfMiddle = Math.floor(array.length / 2);
  // If the array is less than three, there will be no middle found.
  if (array.length > 2) {
    // To return both of the middle elements if the array is even.
    if (array.length % 2 === 0) {
      // With the zero indexing we look for [indexOfMiddle - 1] as the middle of array.length / 2.
      middleElementsFound.push(array[indexOfMiddle - 1]);
      middleElementsFound.push(array[indexOfMiddle]);
    } else {
      // In the case of a numerically odd length.
      middleElementsFound.push(array[indexOfMiddle]);
    }
  }
  // Returns the array.
  return middleElementsFound;
};

module.exports = middle;
