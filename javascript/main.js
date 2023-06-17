const WEATHER_API_KEY = "41281ca44d380f57a549ca6a291b8b59";

function getWeatherData() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${WEATHER_API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

getWeatherData();