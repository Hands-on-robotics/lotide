/**
 * letterPositions Returns an object containing key names of each character found in the string. Each key contains an array with each index the letter is found at in the string.
 * @param {string} sentence takes in a string to count the position of letters
 * @returns {object} containing the letters of the string and the location of each letter at their respective indices.
 */
const letterPositions = function (sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    if (char !== " ") {
      // if this char key does not yet exist.
      if (!results[char]) {
        // then add the key and index.
        results[char] = [index];
        // if the key already exists, just add the new index as an element to the existing array.
      } else if (results[char]) {
        results[char].push(index);
      }
    }
  }

  // return the object.
  return results;
};

module.exports = letterPositions;
