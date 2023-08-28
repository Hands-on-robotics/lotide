

/**
 * flatten Creates a copy of multi-level array with one less level.
 * @param {array} twoDimensionalArray Is the original.
 * @returns {array} oneDimensionalArray Is a copy of the original array with one less level.
 */
const flatten = function(twoDimensionalArray) {
  // Creates a new one dimensional array.
  const oneDimensionalArray = [];
  // Adds each element of the original to the new array.
  for (const element of twoDimensionalArray) {
    // If the element found is an array, then each element will be added to the one dimensional array.
    if (Array.isArray(element)) {
      for (const secondLevelElement of element) {
        oneDimensionalArray.push(secondLevelElement);
      }
    } else {
      // Adds element if it is not an array.
      oneDimensionalArray.push(element);
    }
  }
  return oneDimensionalArray;
};
