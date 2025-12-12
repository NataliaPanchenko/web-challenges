console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const add = document.querySelector('[data-js="add"]');
const subtract = document.querySelector('[data-js="subtract"]');
const multiply = document.querySelector('[data-js="multiply"]');
const divide = document.querySelector('[data-js="divide"]');
const exponent = document.querySelector('[data-js="exponent"]');
const modulo = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
add.addEventListener("click", () => {
  const addResult = operand1 + operand2;
  console.log(operand1 + " + " + operand2 + " = " + addResult);
});

subtract.addEventListener("click", () => {
  const subtractResult = operand1 - operand2;
  console.log(operand1 + " - " + operand2 + " = " + subtractResult);
});

multiply.addEventListener("click", () => {
  const multiplyResult = operand1 * operand2;
  console.log(operand1 + " * " + operand2 + " = " + multiplyResult);
});

divide.addEventListener("click", () => {
  const divideResult = operand1 / operand2;
  console.log(operand1 + " / " + operand2 + " = " + divideResult);
});

exponent.addEventListener("click", () => {
  const exponentResult = operand1 ** operand2;
  console.log(operand1 + " ** " + operand2 + " = " + exponentResult);
});

modulo.addEventListener("click", () => {
  const moduloResult = operand1 % operand2;
  console.log(operand1 + " mod " + operand2 + " = " + moduloResult);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseByOne = document.querySelector('[data-js="increase-by-one"]');
increaseByOne.addEventListener("click", () => {
  operand1++;
  console.log("Updated operand1: " + operand1);
});

const increaseByFive = document.querySelector('[data-js="increase-by-five"]');
increaseByFive.addEventListener("click", () => {
  operand1 += 5;
  console.log("Updated operand1: " + operand1);
});

const decreaseByOne = document.querySelector('[data-js="decrease-by-one"]');
decreaseByOne.addEventListener("click", () => {
  operand1--;
  console.log("Updated operand1: " + operand1);
});

const decreaseByFive = document.querySelector('[data-js="decrease-by-five"]');
decreaseByFive.addEventListener("click", () => {
  operand1 -= 5;
  console.log("Updated operand1: " + operand1);
});

const multiplyByTwo = document.querySelector('[data-js="multiply-by-two"]');
multiplyByTwo.addEventListener("click", () => {
  operand1 *= 2;
  console.log("Updated operand1: " + operand1);
});

const divideByTwo = document.querySelector('[data-js="divide-by-two"]');
divideByTwo.addEventListener("click", () => {
  operand1 /= 2;
  console.log("Updated operand1: " + operand1);
});
// --^-- write your code here --^--
