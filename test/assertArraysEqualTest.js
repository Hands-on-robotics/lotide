// assertArraysEqualTest.js

const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

console.log("This should be true:", assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log("This should be false:", assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 3]));
