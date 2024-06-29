function reafreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  let descriptionElement = document.querySelector("#description");
  let description = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");

  let wind = response.data.wind.speed;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = `${date.getDay()} ${date.getHours} ${
    date.getMinutes
  }`;

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = description;

  temperatureElement.innerHTML = Math.round(temperature);

  humidityElement.innerHTML = humidity;

  windElement.innerHTML = wind;

  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "09a304930f8t6a9ffa96d124dfof7bde";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reafreshWeather);
}

function handeleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handeleSearchSubmit);

searchCity("Kyiv");

function FormDate(date) {
  let minetes = date.getMinutes;
  let hours = date.getHours;
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
  //console.log(day);
}

//

//console.log(now.getDay());
// console.log(days);

// console.log(FormData(newDate()));
