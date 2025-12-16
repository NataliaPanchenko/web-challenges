console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHours = new Date().getHours();
  switch (true) {
    case currentHours >= 6 && currentHours <= 12:
      return "Good Morning";
    case currentHours >= 13 && currentHours <= 18:
      return "Good Afternoon";
    case currentHours >= 19 && currentHours <= 22:
      return "Good Evening";
    case currentHours >= 23 && currentHours <= 5:
      return "Good Night";
  }
}

function getDayColor() {
  const currentDay = new Date().getDay();
  console.log(currentDay);
  switch (true) {
    case currentDay === 1:
      return "darkgray";
    case currentDay >= 2 && currentDay <= 5:
      return "lightblue";
    case currentDay === 6 || currentDay === 0:
      return "hotpink";
  }
  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
