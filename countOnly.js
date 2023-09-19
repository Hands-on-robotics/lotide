
/**
 * countOnly returns an object containing the items counted from an array. Items are listed as keys with the amount of times found as the value.
 * @param {array} allItems Contains the possible items to count from.
 * @param {object} itemsToCount Contains keys of desired items to be counted, with booleans of true for values.
 * @returns {object} The Contains the items counted from array in keys with the amount of times found as the value.
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    
    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }
  return results;
};

module.exports = countOnly;
