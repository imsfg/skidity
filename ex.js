
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var url = "https://nominatim.openstreetmap.org/reverse?format=json&lat="+latitude+"&lon="+longitude+"&zoom=18&addressdetails=1";
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
        const city = data.address.town || data.address.city;
          
          if (city==undefined) {
            document.getElementById("cityName").innerHTML = "City:" + "New Delhi";
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=New Delhi&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
            .then(response => response.json())
            .then(data=>{
                for(i=0;i<5;i++){
                    document.getElementById("day"+(i+1)+"min").innerHTML="Min:"+Number(data.list[i +(7*i)].main.temp_min).toFixed(1)+"°";
                }
                for(i=0;i<5;i++){
                    document.getElementById("day"+(i+1)+"max").innerHTML="Max:"+Number(data.list[i +(7*i)].main.temp_max).toFixed(1)+"°";
                }
                for(i=0;i<5;i++){
                    document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i+(7*i)].weather[0].icon +".png";
                }
                for(i=0;i<6;i++){
                    document.getElementById("x"+(i+1)).innerHTML=(data.list[i].dt_txt).slice(10,19);
                }
                for(i=0;i<6;i++){
                    document.getElementById("z"+(i+1)).innerHTML=Number(data.list[i].main.temp).toFixed(1)+"°C";
                }
                for(i=0;i<6;i++){
                    document.getElementById("y"+(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
                }
                document.getElementById("ptanhi").innerHTML = data.list[0].weather[0].description;
                document.getElementById("temp").innerHTML = data.list[0].main.temp +"°C";
                document.getElementById("pres").innerHTML = data.list[0].main.pressure +" inHg";
                        document.getElementById("humi").innerHTML = data.list[0].main.humidity +"%";
                if (data.list[0].weather[0].main=="Clear") {
                    document.getElementById("weather").className = "weather1";
                    document.getElementById("header").className = "header1";
                } 
                else if (data.list[0].weather[0].main=="Thunderstorm") {
                    document.getElementById("weather").className = "weather2";
                    document.getElementById("header").className = "header2";
                } 
                else if (data.list[0].weather[0].main=="Rain" || data.list[0].weather[0].main=="Drizzle") {
                    document.getElementById("weather").className = "weather3";
                    document.getElementById("header").className = "header3";
                } 
                else if (data.list[0].weather[0].main=="Snow") {
                    document.getElementById("weather").className = "weather4";
                    document.getElementById("header").className = "header4";
                } 
                else if (data.list[0].weather[0].main=="Clouds") {
                    document.getElementById("weather").className = "weather5";
                    document.getElementById("header").className = "header5";
                } 
                else if (data.list[0].weather[0].main=="Mist" || data.list[0].weather[0].main=="Smoke" || data.list[0].weather[0].main=="Haze" || data.list[0].weather[0].main=="Fog" || data.list[0].weather[0].main=="Dust" || data.list[0].weather[0].main=="Sand") {
                    document.getElementById("weather").className = "weather6";
                    document.getElementById("header").className = "header6";
                } 
                document.getElementById("cityInput").innerHTML="";
            })
          }
          else{
            document.getElementById("cityName").innerHTML = "City:" + city;
          fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
          .then(response => response.json())
          .then(data=>{
            document.getElementById("ptanhi").innerHTML = data.list[0].weather[0].description;
            document.getElementById("temp").innerHTML = data.list[0].main.temp +"°C";
            document.getElementById("pres").innerHTML = data.list[0].main.pressure +"inHg";
            document.getElementById("humi").innerHTML = data.list[0].main.humidity +"%";
              for(i=0;i<5;i++){
                  document.getElementById("day"+(i+1)+"min").innerHTML="Min:"+Number(data.list[i +(7*i)].main.temp_min).toFixed(1)+"°";
              }
              for(i=0;i<5;i++){
                  document.getElementById("day"+(i+1)+"max").innerHTML="Max:"+Number(data.list[i +(7*i)].main.temp_max).toFixed(1)+"°";
              }
              for(i=0;i<5;i++){
                  document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i+(7*i)].weather[0].icon +".png";
              }
              for(i=0;i<6;i++){
                document.getElementById("x"+(i+1)).innerHTML=(data.list[i].dt_txt).slice(10,19);
            }
            for(i=0;i<6;i++){
                document.getElementById("z"+(i+1)).innerHTML=Number(data.list[i].main.temp).toFixed(1)+"°C";
            }
            for(i=0;i<6;i++){
                document.getElementById("y"+(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
            }
            if (data.list[0].weather[0].main=="Clear") {
                if (Number((data.list[0].dt_txt).slice(11,13))>18 ||Number((data.list[0].dt_txt).slice(11,13))<6 ) {
                    document.getElementById("weather").className = "weather0";
                    document.getElementById("header").className = "header0";
                }
                else{
                document.getElementById("weather").className = "weather1";
                document.getElementById("header").className = "header1";
                }
                
            } 
            else if (data.list[0].weather[0].main=="Thunderstorm") {
                document.getElementById("weather").className = "weather2";
                document.getElementById("header").className = "header2";
            } 
            else if (data.list[0].weather[0].main=="Rain" || data.list[0].weather[0].main=="Drizzle") {
                document.getElementById("weather").className = "weather3";
                document.getElementById("header").className = "header3";
            } 
            else if (data.list[0].weather[0].main=="Snow") {
                document.getElementById("weather").className = "weather4";
                document.getElementById("header").className = "header4";
            } 
            else if (data.list[0].weather[0].main=="Clouds") {
                document.getElementById("weather").className = "weather5";
                document.getElementById("header").className = "header5";
            } 
            else if (data.list[0].weather[0].main=="Mist" || data.list[0].weather[0].main=="Smoke" || data.list[0].weather[0].main=="Haze" || data.list[0].weather[0].main=="Fog" || data.list[0].weather[0].main=="Dust" || data.list[0].weather[0].main=="Sand") {
                document.getElementById("weather").className = "weather6";
                document.getElementById("header").className = "header6";
            }          
          })
        }
        });
    });
  } 
 
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        e.preventDefault();
        document.getElementById("keydown").click();
     }
    });

function GetInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
   
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
    .then(response => {
      if (response.ok) {
        cityName.innerHTML = "--"+newName.value+"--";
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
        .then(response => response.json())
        .then(data=>{
            for(i=0;i<5;i++){
                document.getElementById("day"+(i+1)+"min").innerHTML="Min:"+Number(data.list[i +(7*i)].main.temp_min).toFixed(1)+"°";
            }
            for(i=0;i<5;i++){
                document.getElementById("day"+(i+1)+"max").innerHTML="Max:"+Number(data.list[i +(7*i)].main.temp_max).toFixed(1)+"°";
            }
            for(i=0;i<5;i++){
                document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i+(7*i)].weather[0].icon +".png";
            }
            for(i=0;i<6;i++){
                document.getElementById("x"+(i+1)).innerHTML=(data.list[i].dt_txt).slice(10,19);
            }
            for(i=0;i<6;i++){
                document.getElementById("z"+(i+1)).innerHTML=Number(data.list[i].main.temp).toFixed(1)+"°C";
            }
            for(i=0;i<6;i++){
                document.getElementById("y"+(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
            }
            document.getElementById("ptanhi").innerHTML = data.list[0].weather[0].description;
            document.getElementById("temp").innerHTML = data.list[0].main.temp +"°C";
            document.getElementById("pres").innerHTML = data.list[0].main.pressure +" inHg";
                    document.getElementById("humi").innerHTML = data.list[0].main.humidity +"%";
            if (data.list[0].weather[0].main=="Clear") {
                if (Number((data.list[0].dt_txt).slice(11,13))>18 ||Number((data.list[0].dt_txt).slice(11,13))<6 ) {
                    document.getElementById("weather").className = "weather0";
                    document.getElementById("header").className = "header0";
                }
                else{
                document.getElementById("weather").className = "weather1";
                document.getElementById("header").className = "header1";
                }
                
            } 
            else if (data.list[0].weather[0].main=="Thunderstorm") {
                document.getElementById("weather").className = "weather2";
                document.getElementById("header").className = "header2";
            } 
            else if (data.list[0].weather[0].main=="Rain" || data.list[0].weather[0].main=="Drizzle") {
                document.getElementById("weather").className = "weather3";
                document.getElementById("header").className = "header3";
            } 
            else if (data.list[0].weather[0].main=="Snow") {
                document.getElementById("weather").className = "weather4";
                document.getElementById("header").className = "header4";
            } 
            else if (data.list[0].weather[0].main=="Clouds") {
                document.getElementById("weather").className = "weather5";
                document.getElementById("header").className = "header5";
            } 
            else if (data.list[0].weather[0].main=="Mist" || data.list[0].weather[0].main=="Smoke" || data.list[0].weather[0].main=="Haze" || data.list[0].weather[0].main=="Fog" || data.list[0].weather[0].main=="Dust" || data.list[0].weather[0].main=="Sand") {
                document.getElementById("weather").className = "weather6";
                document.getElementById("header").className = "header6";
            } 
            document.getElementById("cityInput").value='';
        })

        
      } 
      else {
        alert('City does not exist');
        window.location.reload();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

  
const container = document.querySelector('.container1');
const scrollRightBtn = document.querySelector('#scroll-right');

scrollRightBtn.addEventListener('click', function() {
  container.scrollBy({
    left: container.offsetWidth,
    behavior: 'smooth'
  });
});

const scrollLeftBtn = document.querySelector('#scroll-left');

scrollLeftBtn.addEventListener('click', function() {
  container.scrollBy({
    left:-500,
    behavior: 'smooth'
  });
});


fetch('https://api.openweathermap.org/data/2.5/forecast?q=Kolkata&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
.then(response => response.json())
.then(data=>{
    document.getElementById("q1").innerHTML = data.list[0].weather[0].description;
    document.getElementById("q2").innerHTML = data.list[0].main.temp +"°C";
    document.getElementById("pop1").innerHTML = data.city.population;
   
})

fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
.then(response => response.json())
.then(data=>{
    document.getElementById("b1").innerHTML = data.list[0].weather[0].description;
    document.getElementById("b2").innerHTML = data.list[0].main.temp +"°C";
    document.getElementById("pop2").innerHTML = data.city.population;
})

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
.then(response => response.json())
.then(data=>{
    document.getElementById("c1").innerHTML = data.list[0].weather[0].description;
    document.getElementById("c2").innerHTML = data.list[0].main.temp +"°C";
    document.getElementById("pop3").innerHTML = data.city.population;
})

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
.then(response => response.json())
.then(data=>{
    document.getElementById("d1").innerHTML = data.list[0].weather[0].description;
    document.getElementById("d2").innerHTML = data.list[0].main.temp +"°C";
    document.getElementById("pop4").innerHTML = data.city.population;
})

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Sydney&units=metric&appid=24dbfd6a85e374466b31f5579d96aa6f')
.then(response => response.json())
.then(data=>{
    document.getElementById("e1").innerHTML = data.list[0].weather[0].description;
    document.getElementById("e2").innerHTML = data.list[0].main.temp +"°C";
    document.getElementById("pop5").innerHTML = data.city.population;
})