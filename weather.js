// let key=`Q886F2VS92XUEMNUR7GFJSECY`;
let key="your secret key will be here from weather api"
let data=document.getElementById("data");
let container=document.getElementsByClassName("weather-container");

let forms=document.getElementById("form");
forms.addEventListener('submit',async function(e){
    e.preventDefault();
    let city=document.getElementById("city").value;
   
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    let response=await fetch(api);
    let res=await response.json();
    // console.log(res);
    
    if(res.cod=="404"){
        data.innerHTML=`<h1>${"City Not Found"}</h1>`;
    }
    
    
    data.innerHTML=`

    <img class="img" src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png">
  
    <h1 class="weatherinfo">Temp:${res.main.temp}°C</h1>
    <li class="weatherinfo">Feelslike:${res.main.feels_like}°C</li>
    <li class="weatherinfo">Humidity:${res.main.humidity}%</li>
    <li class="weatherinfo">Windspeed:${res.wind.speed}mph</li>
    <li class="weatherinfo">Sunset:${res.sys.sunset}</li>
 
    `;
});

 console.log(window);
