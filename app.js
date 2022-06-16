
const input = document.querySelector('#input');
const search = document.querySelector('.search');
const card = document.querySelector('.card')
// const reset = document.querySelector('.reset')

const getWeatherInfo= async ()=>{
   if(card.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
    alert(input.value+" is already exists")
   }else{const key = 'c101019b3917ef4c27af74063e4ec864';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`
    try {
        const response = await fetch(url);
        const weatherInfo = await response.json();

        console.log(weatherInfo);
        const{weather,main,name,}=weatherInfo
        console.log(weather,main,name);
        card.innerHTML +=`${main.temp}<br> ${name}<br> ${weather[0].description}<br> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/> <br> `
        input.value = ''



    } catch (error) {
    alert('there is a not city called ' + input.value)
    }finally{
        input.value =''
    }
}
    

}

search.addEventListener('click',getWeatherInfo);