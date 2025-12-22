console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
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

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

console.log("Get vector length: ", getVectorLength(2, 2, 3));

const cleanInput = (string) => string.toLowerCase().trim();

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
