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
