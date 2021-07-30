import React, { useState } from "react";
import axios from 'axios'; 

import Credit from "./Credit";
import "./weather.css"; 

export default function Weather() {
  const [ready, setReady] = useState(false); 
  const [temperature, setTemperature] = useState(null); 
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp); 
    setReady(true);
  }

if (ready) {
  return (
      <div className="Weather">
        <div className="weather-app shadow p-3 mb-5 bg-body rounded" id="app-bg">
    
    
  <div className="Search">
        <form id="city-search-form">
          <div className="row">
            <div className="col-6">
              <input
                id="search-bar"
                type="text"
                placeholder="Type a city..."
                autoFocus
                autoComplete="off"
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


  <div className="Today">
        <div className="row justify-content-center text-center">
          <div className="mx-auto" styles="border: none">
            <h1 className="city" id="city-name">
              Tokyo
            </h1>
          </div>
        </div>

        <ul>
          <div className="row">
            <div className="col-12">
              <ul>
                  <li id="today-time">Last updated - Mon 16:44</li>
              </ul>          
            </div>
          </div>
          <div className="row today">
            <div className="col-5">
              <ul>
                  <li id="description">sunny</li>
              </ul>
            </div>

            <div className="col-2">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="..."
                id="emoji"
                width="50px"
              />
            </div>

            <div className="col-4">
              <div className="weather-temperature">
                <ul>
                  <li>
                      <span id="temp-today">{Math.round(temperature)}</span>
                      <span id="degrees">°</span>
                      <span id="degrees-units">
                      <a href="www.google.com" id="celsius-link" className="active">
                          C
                      </a>{" "}
                      |{" "}
                      <a href="www.google.com" id="fahrenheit-link">
                          F
                      </a>
                      </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
  </div>

  <div className="Forecast">
        <div className="future-days" id="forecast">
          <ul>
            <div id="day2">
              <div className="row">
                <div className="col-4">
                  <ul>
                      <li className="forecast-date" id="day2-date">
                          Tuesday:
                      </li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                      <li className="forecast-emoji" id="day2-emoji">
                          <img
                              src="https://openweathermap.org/img/wn/01d@2x.png"
                              alt="..."
                              id="emoji"
                              width="35px"
                          />
                      </li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                      <li className="forecast-temp" id="day2-temp">
                          24° <span className="temp-low">(14°)</span>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        </div>
  </div>
          <Credit />
        </div>
      </div>
    );
  } else {
    const apiKey = "df0e4203de8f0cf1987569b54e21756c"; 
    let city = "Tokyo"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."; 
  }
}
