let apiKey = "384781b633046620eaed677419a0ac6e";

function showTemperature(response) {
  // console.log(response.data.name);
  let temp = Math.round(response.data.main.temp);
  let temperatureResult = document.querySelector("#temperature");
  temperatureResult.innerHTML = `${temp}`;

  let cityResult = document.querySelector("#city-display");
  cityResult.innerHTML = response.data.name;

  let precipitation = document.querySelector("#precipitation");
  console.log(response.data);
  // precipitation.innerHTML =
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function currentTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
    console.log(showTemperature);
  });
}

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", currentTemp);

// Celsius/Farenheit

function changeFarenheit(event) {
  event.preventDefault();
  let farenheit = document.querySelector("#temperature");
  farenheit.innerHTML = 66;
}
function changeCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("#temperature");
  // celsius.innerHTML = `${currentTemp}°`;
}

let farenheitTemp = document.querySelector("#farenheit-link");
let celsiusTemp = document.querySelector("#celsius-link");

farenheitTemp.addEventListener(`click`, changeFarenheit);
celsiusTemp.addEventListener(`click`, changeCelsius);
// ------------------------------------------
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
