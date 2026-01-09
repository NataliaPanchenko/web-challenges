"use strict";

console.clear();
var actionsElement = document.querySelector("[data-js='actions']");
var userElement = document.querySelector("[data-js='user']");
var errorElement = document.querySelector("[data-js='error']");

function fetchUserData(url) {
  var response;
  return regeneratorRuntime.async(function fetchUserData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url, {
            headers: {
              "x-api-key": "reqres-free-v1"
            }
          }));

        case 3:
          response = _context.sent;
          console.log(response.status, response.ok);

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("User not found (status: ".concat(response.status, ")"));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          return _context.abrupt("return", _context.sent);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            error: _context.t0.message
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

var endpoints = [{
  name: "User 1",
  url: "https://reqres.in/api/users/1"
}, {
  name: "User 2",
  url: "https://reqres.in/api/users/2"
}, {
  name: "User 99",
  url: "https://reqres.in/api/users/99"
}, {
  name: "Invalid API link",
  url: "https://reqres.in"
}];
endpoints.forEach(function (endpoint) {
  var button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);
  button.addEventListener("click", function _callee() {
    var result, user;
    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetchUserData(endpoint.url));

          case 2:
            result = _context2.sent;

            if (result.error) {
              errorElement.textContent = result.error;
              userElement.innerHTML = "No user data available.";
            } else {
              user = result.data;
              userElement.innerHTML = "\n      <img alt=\"".concat(user.first_name, " ").concat(user.last_name, "\" src=\"").concat(user.avatar, "\" class=\"user__image\"/>\n      <h2>").concat(user.first_name, " ").concat(user.last_name, "</h2>\n      ");
              errorElement.textContent = "";
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});