"use strict";

console.clear();
var main = document.querySelector('[data-js="main"]'); // Part 1: Creating a Select Input

var languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese"
};
var select = document.createElement("select");
select.name = "languages";
main.append(select); // --v-- write or modify code below this line --v--

for (var key in languages) {
  var option = document.createElement("option");
  option.textContent = languages[key];
  option.value = languages[key];
  select.append(option);
} // --^-- write or modify code above this line --^--
// Part 2: Creating a Navigation Bar


var nav = {
  home: {
    href: "/home",
    text: "Home"
  },
  about: {
    href: "/about",
    text: "About"
  },
  contact: {
    href: "/contact",
    text: "Contact"
  }
};
var navElement = document.createElement("nav");
var ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul); // --v-- write or modify code below this line --v--

for (var _key in nav) {
  var menuItem = nav[_key];
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href = menuItem.href;
  a.textContent = menuItem.text;
  li.append(a);
  ul.append(li);
} // --^-- write or modify code above this line --^--