import React, { useState } from "react";
import axios from 'axios'; 

import WeatherInfo from "./WeatherInfo"; 
import Credit from "./Credit";
import "./weather.css"; 

export default function Weather(props) { 
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false}); 
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name, 
      temperature: response.data.main.temp, 
      description: response.data.weather[0].main,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    }); 
  }

  function search() {
    const apiKey = "4bf607af66f424ce009f3ab41fd57579"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

if (weatherData.ready) {
  return (
  <div className="Weather">
  <div className="weather-app shadow p-3 mb-5 bg-body rounded" id="app-bg">
    
    <div className="Search">
        <form id="city-search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                id="search-bar"
                type="text"
                placeholder="Type a city..."
                autoFocus
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                id="submit-button"
                type="submit"
                className="btn btn-outline-secondary"
                value="🔎"
              />
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="current-location-button"
              >
                <span role="img" aria-label="current">
                  📍
                </span>
              </button>
            </div>
          </div>
        </form>
    </div>

    <WeatherInfo data={weatherData} />
    <Credit />

  </div>
  </div>
);

  } else {
    search(); 
    return "Loading..."; 
  }
}
