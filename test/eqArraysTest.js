// eqArraysTest.js

const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log("This should be true:", assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true));
console.log("This should be false:", assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 3]), true));