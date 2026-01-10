"use strict";

console.clear();
var url = "https://swapi.py4e.com/api/people";

function fetchData() {
  var response, data, r2d2;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);
          console.log(data.results);
          console.log(data.results[0].name);
          console.log(data.results[4].birth_year);
          console.log(data.results[9].homeworld);
          r2d2 = data.results.find(function (person) {
            return person.name === "R2-D2";
          });
          console.log("R2-D2s eye color:", r2d2.eye_color);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

fetchData();