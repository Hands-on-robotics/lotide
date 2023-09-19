/**
 *This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
 *This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence while excluding spaces.
 * @param {array} string takes in a string to count
 * @returns {object} returns an object containing letter counts
 */
const countLetters = function (string) {

  // Create object
  const letterCounts = {};

  for (const char of string) {
    // If char is not a space
    if (char !== " ") {
      // If char is not in Object
      if (!letterCounts[char]) {
        // Add char as a key with a value of one
        letterCounts[char] = 1;
      } else {
        // else the key is already there and we add one to the key's value
        letterCounts[char]++;
      }
    }
  }
  return letterCounts;
};

module.exports = countLetters;
