
// tailTest.js

const tail = require('../tail');
const assertEqual = require('../assertEqual');

console.log("This should Pass", assertEqual(tail("best"), "est"));
console.log("This should Fail", assertEqual(tail("best"), "best"));