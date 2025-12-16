console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

SUPER_SECRET_PASSWORD === receivedPassword
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

// Part 2: Even / Odd
const number = 6;
number % 2 === 0 ? console.log("even number") : console.log("odd number");

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let priceOfHotdogs = 0;
switch (true) {
  case numberOfHotdogs < 5:
    priceOfHotdogs = 2;
    console.log(priceOfHotdogs + " euro");
    break;
  case numberOfHotdogs >= 5 && numberOfHotdogs < 100:
    priceOfHotdogs = 1.5;
    console.log(priceOfHotdogs + " euro");
    break;
  case numberOfHotdogs >= 100 && numberOfHotdogs < 1000000:
    priceOfHotdogs = 1;
    console.log(priceOfHotdogs + " euro");
    break;
  case numberOfHotdogs >= 1000000:
    priceOfHotdogs = 0.2;
    console.log(priceOfHotdogs + " euro");
    break;
}
// Part 4: Daytime
const currentHour = 17;

let statement = "";

statement = currentHour > 17 ? "Partytime!!!" : "Still need to learn...";
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Bob";

const greeting =
  "Hello " + (coachName === userName ? "Coach " : coachName) + "!";

console.log(greeting);
