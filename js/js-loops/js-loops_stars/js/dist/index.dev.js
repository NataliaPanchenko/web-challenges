"use strict";

console.clear();
var starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = ""; // --v-- write or modify code below this line --v--

  var _loop = function _loop(i) {
    var star = document.createElement("img");

    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }

    star.addEventListener("click", function () {
      renderStars(i);
    });
    starContainer.append(star);
  };

  for (var i = 1; i <= 5; i++) {
    _loop(i);
  } // --^-- write or modify code above this line --^--

}

renderStars(3);