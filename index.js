const apikey= "7cdb74fb1bb10ab91571af8cdf8db9d3";

const weatherDataEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-input")

const formEl =document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    console.log(cityValue);
    getWeathaeData(cityValue);
});

async function getWeathaeData(cityValue){
    try {
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}`)
   if(!respond.ok){
    throw new Error("Network response was not ok")
   }

   const data = await response.json()

   console.log(data);
} catch (error){

    }
}