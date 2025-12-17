"use strict";

console.clear();
var progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  var documentHeight = document.body.clientHeight;
  var scrollY = window.scrollY;
  var windowHeight = window.innerHeight;
  var percent = 100;
  var actualScroll = documentHeight - windowHeight;
  var progressPercentage = scrollY / actualScroll * percent;
  return progressPercentage;
}

document.addEventListener("scroll", function () {
  scrollPercentage = calculateScrollPercentage();
  progressBar.style.width = "".concat(scrollPercentage, "%");
});