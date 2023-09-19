/**
 * countLetters Returns an object with the key values of the letters and the amount of times they occur in a given string.
 * @param {string} string Taken used for counting.
 * @returns {object} Returns an object containing letters as keys and the letter's counter for it's value.
 */
const countLetters = function (string) {
  const letterCounts = {};

  for (const char of string) {
    if (char !== " ") {
      if (letterCounts[char]) {
        letterCounts[char]++;
      } else {
        letterCounts[char] = 0;
      }
    }
  }

  return letterCounts;
};

module.exports = countLetters;
