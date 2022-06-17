const input = document.querySelector("#input");
const search = document.querySelector(".search");
const card = document.querySelector(".card");
const reset = document.querySelector(".reset");
let description = document.querySelector(".description");

const getWeatherInfo = async () => {
  if (card.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
    description.innerText = `You already know the weather for city. Please search for another city 😉`;
    setTimeout(() => {
      description.innerText = "";
    }, 5000);
    input.value = "";
  } else {
    const key = "c101019b3917ef4c27af74063e4ec864";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`;
    try {
      const response = await fetch(url);
      const weatherInfo = await response.json();

      // console.log(weatherInfo);
      const { weather, main, name, sys } = weatherInfo;
      // console.log(weather,main,name);
      card.innerHTML += `<div class='cardInfo'>
      <h2 class="city-name">
              <span>${name}</span>
              <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${main.temp}<sup>°</sup>C</div>
          <figure>
              <img class="city-icon" src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
              <figcaption>${weather[0].description}</figcaption>
          </figure>
          </div>`;
      input.value = "";
    } catch (error) {
      description.innerText = error;
      setTimeout(() => {
        description.innerText = "";
      }, 5000);
    } finally {
      input.value = "";
    }
  }
};
const resetWindow = () => {
  location.reload();
};
search.addEventListener("click", getWeatherInfo);
reset.addEventListener("click", resetWindow);

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getWeatherInfo();
  }
});
