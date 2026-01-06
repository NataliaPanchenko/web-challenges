console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (let languages of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = languages;
  ol.append(li);
}

// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--
