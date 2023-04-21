// "https://api.openweathermap.org/data/2.5/weather?q=asansol&units=metric&appid=82fde363dd30e86cd02b72366d9e4688");

async function getapi() {
  let cityData = [];
  const city = document.getElementById("searchInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82fde363dd30e86cd02b72366d9e4688`;
  const response = await fetch(url);
  cityData = await response.json();
  if (cityData.cod == 200) {
    document.getElementById(
      "cityName"
    ).innerText = `Weather in ${cityData.name}`;
    document.getElementById("errorID").innerText = ``;
    let temp = (cityData.main.temp - 32) / 9;
    document.getElementById("cityWeather").innerText = `${temp.toFixed(2)}°C`;
    document.getElementById("cloudID").innerText = `${titleCase(
      cityData.weather[0].description
    )}`;
    document.getElementById(
      "humidityID"
    ).innerText = `Humidity: ${cityData.main.humidity} C`;
    document.getElementById(
      "windID"
    ).innerText = `Wind Speed: ${cityData.wind.speed} km/h`;
  } else {
      document.getElementById("cityName").innerText = ``;
      document.getElementById("errorID").innerText = `Sorry!! No data Found`;
    document.getElementById("cityWeather").innerText = ``;
    document.getElementById("cloudID").innerText = ``;
    document.getElementById("humidityID").innerText = ``;
    document.getElementById("windID").innerText = ``;
  }
}

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

var input = document.getElementById("searchInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getapi();
  }
});
