
/**
 * without Creates a copy of the original array without the unwanted elements.
 * @param {array} originalArray Is an array with elements that we want to remove.
 * @param {array} toRemoveArray Is an array of elements to be removed from the original.
 * @returns {array} A copy of the original array without the unwanted elements.
 */
const without = function(originalArray, toRemoveArray) {
  // Create a new array from original.
  let editedArray = [];
  // Add elements from originalArray.
  for (const element of originalArray) {
    editedArray.push(element);
    // And if the element is found in the toRemoveArray, then remove that element.
    for (let i = 0; i < toRemoveArray.length; i++) {
      if (element === toRemoveArray[i]) {
        editedArray.pop();
      }
    }
  }
  // Now return the edited array.
  return editedArray;
};

module.exports = without;
