const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=dc3ca0b1e530db7c8b79a01f0377b48e";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
   

    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp, 0);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });


  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=dc3ca0b1e530db7c8b79a01f0377b48e";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
       

        document.getElementById('forecastTemp').textContent = Math.round(fivedayforecast[4].main.temp, 0);
        document.getElementById('forecastCondition').textContent = fivedayforecast[4].weather[0].description;
        document.getElementById('forecastHumidity').textContent = fivedayforecast[4].main.humidity;
    });