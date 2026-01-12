console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const error = document.querySelector(".error");
error.classList.add("hidden");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.classList.add("hidden");
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    document.querySelector(".error").innerText = "";
  } catch (e) {
    output.innerText = "❌";
    document.querySelector(".error").innerText = error.message;
    error.classList.remove("hidden");
  }
});
