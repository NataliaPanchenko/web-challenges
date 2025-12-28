console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  addToastMessage();
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});

function addToastMessage() {
  const li = document.createElement("li");
  li.textContent = "I'm a toast message.";
  li.classList.add("toast-container__message");
  toastContainer.append(li);
}
