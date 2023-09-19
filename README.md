# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hands-on-coding/lotide`

**Require it:**

`const _ = require('@hands-on-coding/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head(array)`: returns the first element in an array.
* `tail(array)`: returns an array without the first element.
* `middle(array)`: returns the one or two middle elements in an array as an array.
* `flatten(array)`: returns a multi-level array with one less level than the original multi-level array. 
* `map(array, callback)`: returns an array of truthy values from an array that are added using a callback function.
* `letterPositions(string)`: returns an object containing key names of each character found in the string. 
                       Each key contains an array with each index the letter is found at in the string.
* `without(array, array)`: returns a copy of the original array without the unwanted elements of the second array. 
* `takeUntil(array, callback)`: returns array of copied elements up until the point that the callback truthy statement is reached.
* `countOnly(array, object)`: returns an object containing the items counted from an array. Items are listed as keys with the amount of times found as the value.
* `countLetters()`: returns an object with the key value pairs of the letters and the amount of times they occur in a given string.
* `findKey()`: returns a single key from an object as a string. findKey returns the first occurrence of a truthy value used in a callback.
* `findKeyByValue()`: returns the key of an object by the value given.
* `eqArrays()`: returns a boolean for two arrays having the same elements and length.
* `eqObjects()`: returns a boolean for two objects having the same keys and values.
* `assertEqual()`: returns a boolean and a assertion message for the equality of two primitive values .
* `assertArraysEqual()`: returns a boolean value for two arrays having the same length and elements. Console logs a flashy Passed: or Failed: output
* `assertObjectsEqual()`: returns a boolean value for two objects having the same length, keys and values. Console logs a flashy Passed: or Failed: output.