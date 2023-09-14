// test/assertEqualTest.js

const assertEqual = require('../assertEqual');

// Test Code //

console.log("This should be true: ", assertEqual(1, 1));
console.log("This should be true: ", assertEqual("labs", "labs"));
console.log("This should be false: ", assertEqual("lighthouse", "labs"));
