
const containerEl = document.getElementById("card");

function restCountries() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i<data.length; i++) {
 let countryName = data[i].name.common;
let capital = data[i].capital;
let region = data[i].region;
let countryCode= data[i].cca3;
let image = data[i].flags.png;
let Latlng= data[i].latlng;


containerEl.innerHTML += `<div id="cardWrapper" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="card h-100">
<div class="card-header">
<h6 class="card-title d-flex justify-content-center"><b>${countryName}</b></h6>
</div>
<div class="card-body">
<img src=${image} class="card-img-top" alt="...">
<div class="card-text">  
<p class="card-text"><b>Capital : </b>${capital}</p>
<p class="card-text"><b>Region : </b>${region}</p>
<pclass="card-text"><b>code : </b>${countryCode}</p>
<pclass="card-text"><b>Latlng: </b>${Latlng}</p>

<div id="weather${i}">
</div>
<a id="toggle" class= "btn btn-primary" onclick="weather('${countryName}', ${i})"> Click For Weather </a>
 </ul>
</div>
</div>
</div>
</div>` 
      } 
  });
}
restCountries();

function weather (country, i){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=1ab91661d835035ed31ed8383bde62a4`)
  .then(response1 => (response1.json()))
  .then(data1 => {
    let weatherEl = document.getElementById('weather'+i)
    let temp = data1.main.temp
    let pressure = data1.main.pressure
    let humidity = data1.main.humidity
    let windSpeed = data1.wind.speed

weatherEl.innerHTML += `<div class="card-body1"><b>Weather Details</b>
<ul class="list-group list-group-flush">
<p class=" card-text"><b>Temperature : Temp:${temp},p:${pressure},Humid:${humidity},Windspeed:${windSpeed}</p>
</div?`
  
})
.catch((error) => {
    console.error
    alert(`Error fetching weather data.`);
  });
}

