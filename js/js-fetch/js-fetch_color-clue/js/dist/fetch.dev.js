"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNewColor = fetchNewColor;

var _utils = require("./utils.js");

function fetchNewColor() {
  var hexCode, colorApiUrl, response, data;
  return regeneratorRuntime.async(function fetchNewColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          hexCode = (0, _utils.getRandomHexCode)();
          colorApiUrl = "https://www.thecolorapi.com/id?hex=".concat(hexCode);
          /**
           * Hint 1:
           * Use the fetch API to get the hex value and the name of the closest
           * named color to the randomly generated `hexCode` from the color API.
           * These values can be found in `.name.closest_named_hex` and
           * `.name.value` properties of the response data respectively.
           *
           * Hint 2:
           * Call the `setColorToGuess` function to set the color to guess.
           * The function takes two arguments:
           *  - the hex code of the closest named color
           *  - and the name of the random color
           */
          // --v-- your code here --v--

          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(colorApiUrl));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          console.log(data);
          (0, _utils.setColorToGuess)(data.name.closest_named_hex, data.name.value); // --^-- your code here --^--

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}