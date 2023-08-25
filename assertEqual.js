
// A "True or False" comparison function
const assertEqual = function(actual, expected) {

  // Emojis for success to make the output more readable
  const checkMarkEmojiTimes3 = "\u{2705} \u{2705} \u{2705}";
  // Emojis for fail
  const crossMarkEmojiTimes3 = "\u{274C} \u{274C} \u{274C}";

  // If True Assertion show Pass message
  if (actual === expected) {
    return `${checkMarkEmojiTimes3} Assertion Passed: ${actual} === ${expected}`;
  } else {
    // Else False and show Fail message
    return `${crossMarkEmojiTimes3} Assertion Failed: ${actual} !==  ${expected}`;
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));