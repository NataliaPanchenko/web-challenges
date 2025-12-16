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

var getVectorLength = function getVectorLength(x, y, z) {
  Math.pow(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2), 0.5);
};

var cleanInput = function cleanInput(string) {
  string.toLowerCase().trim();
};
/*
Rewrite the following arrow functions as classic functions.
*/


function isOddAndSmall(number) {
  if (number > 10 || number % 2 === 0) {
    return false;
  }

  return true;
}

function add3(a, b, c) {
  a + b + c;
}

function repeat10(string) {
  string.repeat(10);
}