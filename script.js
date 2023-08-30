// variable for weather API
const meteo = document.querySelector(".weather");
const lieu = document.querySelector(".lieu");

// variable for time display feature
const date = new Date();
const heure = date.getHours();
console.log(heure);
let minute = date.getMinutes();

if (minute < 10) {
    minute = "0"+ minute;
}

const afficherHeure = document.querySelector(".time");
afficherHeure.innerHTML = heure + ":" + minute;

// variable for automatic text from API GOT
const sentencePlace = document.querySelector(".text");
const character = document.querySelector(".personnage");
const house = document.querySelector(".house");

// Weather API

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&units=metric&appid=959030ef9cf54911afa094684a645db4"
)
  .then((res) => {
    return res.json();
  })
  .then((resJson) => {
    console.log(resJson);

    const iconUrl = `https://openweathermap.org/img/w/${resJson.weather[0].icon}.png`;

    const iconemeteo = document.createElement("img");
    iconemeteo.src = iconUrl;
    iconemeteo.classList.add("icone-meteo");

    const temperature = document.createElement("p");
    temperature.innerHTML = resJson.main.temp + "°";

    const location = document.createElement("div");
    location.innerHTML = resJson.name;

    meteo.appendChild(iconemeteo);
    meteo.appendChild(temperature);
    lieu.appendChild(location);
  })

  .catch((error) => console.log(error));

// GOT sentences API

fetch("https://api.gameofthronesquotes.xyz/v1/random")
  .then((res) => res.json())
  .then((resJson) => {
    sentencePlace.innerText = '"' + resJson.sentence + '"';
    character.innerText = resJson.character.name;
    house.innerText = resJson.character.house.name;
  })

  .catch((error) => console.log(error));

// Background image API

fetch(
  "https://api.unsplash.com/photos/random/?client_id=hsWujjB9ryYVosuDmjkmdoRJ5HEHLytEvd23FMo3vBc"
)
  .then((res) => {
    return res.json();
  })
  .then((resJson) => {
    console.log(resJson);

    document.body.style.backgroundImage = `url(${resJson.urls.regular})`;
  })
  .catch((error) => console.log(error));

// Function display a message depends on what time it is

const message = document.querySelector(".message");

if (heure < 10) {
  message.innerHTML = "Good Morning there !";
} else if (heure > 12) {
  message.innerHTML = "Sounds like a good afternoon !";
} else if (heure > 17) {
  message.innerHTML = "Time to go home !";
} else {
  message.innerHTML = "";
}
