"use strict";

console.clear();
var form = document.querySelector("form");
var output = form.querySelector("output");
var error = document.querySelector(".error");
error.classList.add("hidden");
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
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }

    return a / b;
  }
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  error.classList.add("hidden");
  var firstNumber = Number(event.target.firstNumber.value);
  var secondNumber = Number(event.target.secondNumber.value);
  var operation = event.target.operation.value;

  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    document.querySelector(".error").innerText = "";
  } catch (e) {
    output.innerText = "❌";
    document.querySelector(".error").innerText = error.message;
    error.classList.remove("hidden");
  }
});