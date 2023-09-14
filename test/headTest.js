// test/headTest.js

const head = require('../head');
const assertEqual = require('../assertEqual');

// Test Code //
console.log("This should pass: ", assertEqual(head("test"), "t"));
console.log("This should fail: ", assertEqual(head("est"), "t"));