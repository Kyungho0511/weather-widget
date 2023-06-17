const btn = document.querySelector('.search-button');
const input = document.querySelector('.zipcode');
const form = document.querySelector('form');
const image = document.querySelector('img');
const CITY_NAME = document.querySelector('.city_name');
const CITY_TEMP = document.querySelector('.temperature');

const getWeatherData = (zip) => {
  const API_KEY = "41281ca44d380f57a549ca6a291b8b59";
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const local_weather_data = data;
      const weather_in_celsius = Math.round(local_weather_data.main.temp - 273);
      const weather_icon = local_weather_data.weather[0].icon;
      console.log(weather_icon);
      CITY_NAME.textContent = local_weather_data.name;
      CITY_TEMP.textContent = `${weather_in_celsius} C`;
      image.setAttribute('src', `https://openweathermap.org/img/wn/${weather_icon}@2x.png`);
    })
    .catch(error => alert(`${error}`));

  form.reset();
  input.focus();
}

const getZipcode = (event) => {
  event.preventDefault();
  const ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

// btn.addEventListener('click', event => getZipcode(event));
form.addEventListener('submit', event => getZipcode(event));

