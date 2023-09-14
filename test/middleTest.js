// middleTest.js

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log("This should be [2, 3]:", assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log("This should be [2]:", assertArraysEqual(middle([1, 2, 3]), [2]));
console.log("There should be no middle:", assertArraysEqual(middle([1, 2]), []));
console.log("There should be no middle:", assertArraysEqual(middle([1]), []));
