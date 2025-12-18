// console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector('[data-js="first-name"]');
const age = document.querySelector('[data-js="age"]');
const badness = document.querySelector('[data-js="badness"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data", data);
  console.log("first name", data.firstName);
  console.log("last name", data.lastName);
  console.log("age", data.age);
  console.log("email", data.email);
  console.log("complaint", data.complain);
  console.log("details", data.details);
  console.log("badness", data.badness);
  console.log("date", data.orderDate);
  console.log("tos", data.checkbox);

  event.target.reset();
  event.target.elements.firstName.focus();
});

badness.addEventListener("input", (event) => {
  console.log("badness", event.target.value);
  const sum = Number(age.value) + Number(badness.value);
  console.log(`The age-badness-sum of ${firstName.value} is ${sum}`);
});
