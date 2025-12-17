"use strict";

console.clear();
var pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
var pizza1 = document.querySelector('[data-js="pizza-1"]');
var pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
var pizza2 = document.querySelector('[data-js="pizza-2"]');
var outputSection = document.querySelector('[data-js="output-section"]');
var output = document.querySelector('[data-js="output"]');
pizzaInput1.addEventListener("input", function () {
  var pizzaSize1 = pizzaInput1.value;
  var pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});
pizzaInput2.addEventListener("input", function () {
  var pizzaSize1 = pizzaInput1.value;
  var pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
}); // Task 1: Define the function `calculatePizzaGain` here

var calculatePizzaGain = function calculatePizzaGain(pizzaDiameter1, pizzaDiameter2) {
  var radius1 = Number(pizzaDiameter1) / 2;
  var pizzaArea1 = Math.PI * Math.pow(radius1, 2);
  var radius2 = Number(pizzaDiameter2) / 2;
  var pizzaArea2 = Math.PI * Math.pow(radius2, 2);
  var pizzaGainPercent = (pizzaArea2 - pizzaArea1) / pizzaArea1 * 100;
  console.log(pizzaGainPercent);
  output.textContent = Math.round(pizzaGainPercent);
  return Math.round(pizzaGainPercent);
}; // Task 2: Define the function `updatePizzaDisplay` here


var updatePizzaDisplay = function updatePizzaDisplay(pizzaElement, newSize) {
  var newDisplaySize = newSize / 24 * 100;
  pizzaElement.style.width = "".concat(newDisplaySize, "px");
}; // Task 3: Define the function `updateOutputColor` here


var updateOutputColor = function updateOutputColor(size1, size2) {
  size1 > size2 ? outputSection.style.backgroundColor = "var(--red)" : outputSection.style.backgroundColor = "var(--green)";
};