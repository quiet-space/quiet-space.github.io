const API_KEY = "b5f724b08b3c67dc3c0d7f7b249b93d4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("Can't find you. No whether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
