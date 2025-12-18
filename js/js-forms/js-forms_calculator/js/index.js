console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.querySelector('[data-js="number-a"]');
const numberB = document.querySelector('[data-js="number-b"]');
const addition = document.querySelector('[data-js="addition"]');
const subtraction = document.querySelector('[data-js="subtraction"]');
const multiplication = document.querySelector('[data-js="multiplication"]');
const division = document.querySelector('[data-js="division"]');

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;

  // --v-- write your code here --v--
  if (addition.checked) {
    console.log("addition");
    result = add(numberA.value, numberB.value);
  }
  if (subtraction.checked) {
    console.log("substraction");
    result = subtract(numberA.value, numberB.value);
  }
  if (multiplication.checked) {
    console.log("multiplication");
    result = multiply(numberA.value, numberB.value);
  }
  if (division.checked) {
    console.log("division");
    result = divide(numberA.value, numberB.value);
  }
  // --^-- write your code here --^--
  console.log("form");
  resultOutput.textContent = result;
  console.log(result);
});
