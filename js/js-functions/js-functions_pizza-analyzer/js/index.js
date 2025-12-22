console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here
const calculatePizzaGain = (pizzaDiameter1, pizzaDiameter2) => {
  const radius1 = Number(pizzaDiameter1) / 2;
  const pizzaArea1 = Math.PI * radius1 ** 2;
  const radius2 = Number(pizzaDiameter2) / 2;
  const pizzaArea2 = Math.PI * radius2 ** 2;
  const pizzaGainPercent = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;
  output.textContent = Math.round(pizzaGainPercent);
  return Math.round(pizzaGainPercent);
};

// Task 2: Define the function `updatePizzaDisplay` here
const updatePizzaDisplay = (pizzaElement, newSize) => {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${newDisplaySize}px`;
};

// Task 3: Define the function `updateOutputColor` here
const updateOutputColor = (size1, size2) => {
  size1 > size2
    ? (outputSection.style.backgroundColor = "var(--red)")
    : (outputSection.style.backgroundColor = "var(--green)");
};
