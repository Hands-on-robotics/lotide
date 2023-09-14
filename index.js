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
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  map:  map,
  letterPositions:  letterPositions,
  without:  without,
  takeUntil:  takeUntil,
  countOnly:  countOnly,
  countLetters:  countLetters,
  findKey:  findKey,
  findKeyByValue:  findKeyByValue,
  assertEqual:  assertEqual,
  assertArraysEqual:  assertArraysEqual,
  assertObjectsEqual:  assertObjectsEqual,
  eqArrays:  eqArrays,
  eqObjects:  eqObjects
};
