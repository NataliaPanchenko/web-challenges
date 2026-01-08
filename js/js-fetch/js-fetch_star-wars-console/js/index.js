console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  console.log(data.results);
  console.log(data.results[0].name);
  console.log(data.results[4].birth_year);
  console.log(data.results[9].homeworld);
  console.log(
    "The eye color of " +
      data.results[2].name +
      " is " +
      data.results[2].eye_color
  );
}

fetchData();
