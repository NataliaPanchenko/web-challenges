console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  if (tosCheckbox.checked) {
    tosError.setAttribute("hidden", "");
    alert("Terms of service submitted");
  }
}

tosCheckbox.addEventListener("input", (event) => {
  console.log(event.target.value);
  hideTosError();
  showTosError();
});

function showTosError() {
  !tosCheckbox.checked ? tosError.removeAttribute("hidden") : null;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  form.insertAdjacentHTML(
    "afterend",
    `<div data-js="success" class="success">Complaint successfully submitted!</div>`
  );
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
