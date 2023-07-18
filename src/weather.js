const city = document.querySelector("#weather div:first-child");
const weather = document.querySelector("#weather div:last-child");
const API_KEY = "";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name}`;
      weather.innerText = `Today's wheather : ${data.weather[0].main} \n ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


