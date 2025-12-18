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

  event.target.reset();
  event.target.elements.firstName.focus();
});

badness.addEventListener("input", (event) => {
  console.log("badness", event.target.value);
  const sum = Number(age.value) + Number(badness.value);
  console.log(`The age-badness-sum of ${firstName.value} is ${sum}`);
});
