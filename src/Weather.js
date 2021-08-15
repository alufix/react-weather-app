import React, { useState } from "react"; 
import WeatherInfo from "./WeatherInfo"; 
import WeatherForecast from "./WeatherForecast";
import Credit from "./Credit";
import axios from 'axios';
import "./weather.css"; 

export default function Weather(props) { 
  const [weatherData, setWeatherData] = useState({ ready: false });  
  const [city, setCity] = useState(props.defaultCity);
 
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      city: response.data.name, 
      temperature: response.data.main.temp, 
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    }); 
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "df0e4203de8f0cf1987569b54e21756c"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }



if (weatherData.ready) {
  return (
  <div className="Weather">
    <div className="weather-app shadow p-3 mb-5 bg-body rounded" id="app-bg">
      <div className="Search">
        <form id="city-search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                id="search-bar"
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input
                id="submit-button"
                type="submit"
                className="btn btn-outline-secondary"
                value="🔎"
              />
            </div>
          </div>
        </form>
    </div>
    <WeatherInfo data={weatherData} />
    <WeatherForecast coordinates={weatherData.coordinates} /> 
    <Credit />
  </div>
  </div>
);

  } else {
    search(); 
    return "Loading..."; 
  }
}
