// Challenge 1
let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};
console.log(paris.temperature);

// Challenge 2
let sydney = {
  name: "Sydney",
  country: "France",
  language: "English",
  temperature: 25,
  capitalCity: true
};
console.log(sydney.temperature);

// Challenge 3
let cities = [
  { city: "Canberra" },
  { city: "Melborn" },
  { city: "Surfer's Paradise" }
];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);

//Proposed simpler solution by Matt for #3
let australianCities = ["Canberra", "Melbourne", "Surfer's Paradise"];
console.log(australianCities);

// Challenge 4
let weather = [
  {
    name: "Amsterdam",
    country: "Netherlands",
    language: "Dutch",
    temperature: 2,
    capitalCity: true
  },
  {
    name: "London",
    country: "England",
    language: "English",
    temperature: 10,
    capitalCity: true
  },
  {
    name: "Barcelona",
    country: "Spain",
    language: "Spanish",
    temperature: 20,
    capitalCity: false
  }
];

console.log(weather[0].temperature);
console.log(weather[1].temperature);
console.log(weather[2].temperature);
