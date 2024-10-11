const inputbox=document.querySelector('.inputbox');
const searchBtn=document.getElementById('searchBtn');
const weatherimg=document.querySelector('.weatherimg');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('windspeed');
const notfound=document.querySelector('.notfound');
const weatherbody=document.querySelector('.weatherbody');
async function checkWeather(city){
  const api_key="39608bc354f76ace964a8701c24ec5e3";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data=await fetch(`${url}`).then(response => response.json());

  if (weather_data.cod===`404`) {
    notfound.style.display="flex";
    weatherbody.style.display="none";
    return;
  }
  notfound.style.display="none";
  weatherbody.style.display="flex";

  console.log(weather_data);
  
  temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML=`${weather_data.weather[0].description}`;

  humidity.innerHTML=`${weather_data.main.humidity}%`;

  wind_speed.innerHTML=`${weather_data.wind.speed}Kmm/H`;

  switch (weather_data.weather[0].main) {
    case 'Clouds':
      weatherimg.src="/assets/clouds.png"
      break;
    case 'Rain':
        weatherimg.src="/assets/rain.png"
      break;  
    case 'Mist':
        weatherimg.src="/assets/mist.png"
    break; 
    case 'Snow':
        weatherimg.src="/assets/snow.png"
      break;
    case 'Clear':
        weatherimg.src="/assets/clear.png"
    break;  
    default:
      break;
  }
}

searchBtn.addEventListener('click',()=>{
  checkWeather(inputbox.value);
})