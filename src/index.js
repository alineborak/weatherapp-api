// Homework week 4 - Part 1
let now = new Date();
console.log(now.getDate());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(day);

let hour = now.getHours();
console.log(hour);

let minutes = now.getMinutes();
console.log(minutes);

let time = document.querySelector("#day-time");
time.innerHTML = `${day} ${hour}:${minutes}`;

// Part 2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let searchEng = document.querySelector("#city-display");
  searchEng.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// Part 3
// #celsius-link #farenheit-link #temperature

function changeFarenheit(event) {
  event.preventDefault();
  let farenheit = document.querySelector("#temperature");
  farenheit.innerHTML = 66;
}
function changeCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("#temperature");
  celsius.innerHTML = 19;
}

let farenheitTemp = document.querySelector("#farenheit-link");
let celsiusTemp = document.querySelector("#celsius-link");

farenheitTemp.addEventListener(`click`, changeFarenheit);
celsiusTemp.addEventListener(`click`, changeCelsius);
