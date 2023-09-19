
/**
 * takeUntil returns array of copied elements up until the point that the callback truthy statement is reached.
 * @param {array} array For callback to access.
 * @param {callback} callback Finds the index at which to stop adding to the copied array.
 * @returns {array} Copied values before the truthy value of the callback was met.
 */
const takeUntil = function(array, callback) {
  const takeUntilArray = [];

  for (const element of array) {
    console.log(element);
    if (!callback(element)) {
      takeUntilArray.push(element);
      continue;
    }
    if (callback(element)) {
      break;
    }
  }
  return takeUntilArray;
};

module.exports = takeUntil;
