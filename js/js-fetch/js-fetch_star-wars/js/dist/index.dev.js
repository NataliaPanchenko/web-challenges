"use strict";

var _Card = require("../components/Card/Card.js");

var _utils = require("./utils.js");

console.clear();
var EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: ["https://swapi.py4e.com/api/films/1/", "https://swapi.py4e.com/api/films/2/", "https://swapi.py4e.com/api/films/3/", "https://swapi.py4e.com/api/films/6/"],
  species: [],
  vehicles: ["https://swapi.py4e.com/api/vehicles/14/", "https://swapi.py4e.com/api/vehicles/30/"],
  starships: ["https://swapi.py4e.com/api/starships/12/", "https://swapi.py4e.com/api/starships/22/"],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/"
}; // Create dom element for a card and append it to the root

var firstCard = (0, _Card.Card)(EXAMPLE_DATA);
(0, _utils.renderElement)(firstCard);
var url = "https://swapi.py4e.com/api/people/";
fetchDataAndRender(); // --v-- your code below this line --v--

function fetchDataAndRender() {
  var response, data;
  return regeneratorRuntime.async(function fetchDataAndRender$(_context) {
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
          data.results.forEach(function (element) {
            (0, _utils.renderElement)((0, _Card.Card)(element));
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}