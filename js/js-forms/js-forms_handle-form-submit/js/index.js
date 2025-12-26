// console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data:", data);
  console.log("first name:", data.firstName);
  console.log("last name:", data.lastName);
  console.log("age:", data.age);
  console.log("email:", data.email);
  console.log("complaint:", data.complain);
  console.log("details:", data.details);
  console.log("badness:", data.badness);
  console.log("date:", data.orderDate);
  console.log("tos:", data.checkbox);

  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );

  event.target.reset();
  event.target.elements.firstName.focus();
});
