let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let popUp = prompt("Please enter a city:");
if (weather[popUp]) {
  alert(
    `It is currently ${weather[popUp].temp} °C in ${popUp} with ${weather[popUp].humidity} of humidity`
  );
} else {
  alert(
    "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+"
  );
}
