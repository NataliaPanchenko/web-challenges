"use strict";

var box = document.querySelector("[data-js=box]");
var redButton = document.querySelector("[data-js=js-red-button]");
var greenButton = document.querySelector("[data-js=js-green-button]");
var blueButton = document.querySelector("[data-js=js-blue-button]");
var grayButton = document.querySelector("[data-js=js-gray-button]");
/*
We want to add functionality to the buttons on this page. When a button is clicked, the corresponding color should be applied to the box.
  1. Create a function `removeAllColors` that removes all color classes from the box.
  2. Create a function `addColor` that takes a class name as a parameter and adds that class to the box.
  3. Use the two functions in the event listeners for the buttons to apply the corresponding color to the box when a button is clicked.
*/

redButton.addEventListener("click", function () {
  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "red"
  */
  removeAllColors();
  addColor("red");
});
blueButton.addEventListener("click", function () {
  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "blue"
  */
  removeAllColors();
  addColor("blue");
});
greenButton.addEventListener("click", function () {
  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "green"
  */
  removeAllColors();
  addColor("green");
});
grayButton.addEventListener("click", function () {
  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "gray"
  */
  removeAllColors();
  addColor("gray");
}); // Write your two functions below:

var removeAllColors = function removeAllColors() {
  box.classList.remove("red", "blue", "green", "gray");
};

var addColor = function addColor(className) {
  box.classList.add(className);
};