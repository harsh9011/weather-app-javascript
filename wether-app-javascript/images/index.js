






const apikey = "257bc802507111cca1c3bc299bff9fa3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.input');
const searchbtn = document.querySelector('.button');

const weather_icon = document.querySelector(".weather_icon");

async function checkweather(city) 
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity  + "%";
    document.querySelector(".Wind").innerHTML  = data.wind.speed + "Km/h";

if(data.weather[0].main == "Clouds") 
{
weather_icon.src = "images/clouds.png"

}
else if(data.weather[0].main == "Clear")
{
    weatherIcon.src = "images/clear.png"
}
else if(data.weather[0].main == 'Rain')
{
    weather_icon.src = "images/rain.png";

}
else if(data.weather[0].main == 'Mist')
    {
        weather_icon.src = "images/Mist.png";
    
    }

else if(data.weather[0].main == 'Drizzle')
     {
            weather_icon.src = "images/drizzle.png";

        
     }
else if(data.weather[0].main == 'Snow')
    {
            weather_icon.src = "images/snow.png";
        
    }
else if(data.weather[0].main == 'Haze')
{
    weather_icon.src = "images/haze.png"
}
        
    
        
    




    
}

searchbtn.addEventListener("click" , ()=>
{
    checkweather(searchbox.value);
})


