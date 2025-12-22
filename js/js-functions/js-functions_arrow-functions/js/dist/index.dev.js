"use strict";

console.clear();
/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

var getCurrentHour = function getCurrentHour() {
  var now = new Date();
  var currentHour = now.getHours();

  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log("Get current hour: ", getCurrentHour());

var getVectorLength = function getVectorLength(x, y, z) {
  return Math.pow(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2), 0.5);
};

console.log("Get vector length: ", getVectorLength(2, 2, 3));

var cleanInput = function cleanInput(string) {
  return string.toLowerCase().trim();
};

console.log("Clean input: ", cleanInput("       Hello World!      "));
/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10 || number % 2 === 0) {
    return false;
  }

  return true;
}

console.log("Is odd and small: ", isOddAndSmall(5));

function add3(a, b, c) {
  return a + b + c;
}

console.log("Add three: ", add3(7, 8, 9));

function repeat10(string) {
  return string.repeat(10);
}

console.log("Repeat ten: ", repeat10("A"));