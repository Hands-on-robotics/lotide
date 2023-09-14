// index.js

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const map = require('./map');
const letterPositions = require('./letterPositions');
const without = require('./without');
const takeUntil = require('./takeUntil');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

module.exports = {
  head,
  tail,
  middle,
  flatten,
  map,
  letterPositions,
  without,
  takeUntil,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects
};

// the empty objects still need to be exported
// head: [Function: head],
// tail: [Function: tail],
// middle: [Function: middle],
// flatten: {},
// map: {},
// letterPositions: {},
// without: {},
// takeUntil: {},
// countOnly: {},
// countLetters: {},
// findKey: {},
// findKeyByValue: {},
// assertEqual: [Function: assertEqual],
// assertArraysEqual: [Function: assertArraysEqual],
// assertObjectsEqual: {},
// eqArrays: [Function: eqArrays],
// eqObjects: {}

// These console.log tests of the functions still need to be addressed.

// 1
// 2
// 5
// 7
// 2
// -1
// [ 1, 2, 5, 7, 2 ]

// ---
// I've
// been
// to
// Hollywood
// ,
// [ "I've", 'been', 'to', 'Hollywood' ]
// noma

// ✅✅✅ Assertion Passed: { colors: [ 'red', 'blue' ], size: 'medium' } === { size: 'medium', colors: [ 'red', 'blue' ] }
// true
// ❌❌❌ Assertion Failed: { colors: [ 'red', 'blue' ], size: 'medium' } !== { size: 'medium', colors: [ 'red', 'blue' ], sleeveLength: 'long' }
// false