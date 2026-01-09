"use strict";

console.clear();
var form = document.querySelector("form");
var output = form.querySelector("output");
var error = document.querySelector(".error");
var operations = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }

      return a / b;
    } catch (e) {
      error.textContent = "Please pass a number rather than 0 as divisor, thank you!";
    }
  }
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var firstNumber = Number(event.target.firstNumber.value);
  var secondNumber = Number(event.target.secondNumber.value);
  var operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});