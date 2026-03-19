function foreCast(response) {
  city = response.data.city;
  let weather = Math.round(response.data.temperature.current);
  console.log(weather);
  enterCity = document.querySelector(".holder");
  let sub = document.querySelector("#temp");
  sub.innerHTML = `${weather}`;
}

function search(event) {
  event.preventDefault();
  let enterCity = document.querySelector(".holder");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${enterCity.value}`;
  let city = enterCity.value;
  let apiKey = "t0b1d0fae05ad3dd06fe36a44o3ff11e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(foreCast);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function look() {
  let now = new Date();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = weekdays[day];
  let p = document.querySelector(".weak");
  p.innerHTML = `${formattedDay} ${hours}:${minutes}`;
}
let two = document.querySelector("p");
(two, addEventListener("submit", look));
