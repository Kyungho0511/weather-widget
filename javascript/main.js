const btn = document.querySelector('.search-button');
const input = document.querySelector('.zipcode');

const getWeatherData = (zip) => {
  const WEATHER_API_KEY = "41281ca44d380f57a549ca6a291b8b59";
  const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${WEATHER_API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let local_weather_data = data;
      console.log(local_weather_data);
    });
}

const getZipcode = (event) => {
  event.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', event => getZipcode(event));

