/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

const hamburg = {
  name: "Hamburg",
  country: "Germany",
};

export const getNameAndCountry = function (city) {
  return [city.name, city.country];
};

export const getRelocatedCity = function (city1, city2) {
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  var result = getNameAndCountry(city2);
  var country = result[1];

  var newCity = {};
  newCity.name = city1.name;
  newCity.country = country;

  return newCity;
};
