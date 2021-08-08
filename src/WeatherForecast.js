import React from "react"; 
import "./WeatherForecast.css"; 
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "df0e4203de8f0cf1987569b54e21756c"; 
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse); 

    return (
        <div className="WeatherForecast" id="forecast">
            <div className="row">
                <div className="col-5">
                  <ul>
                      <li className="forecast-date">
                          Tuesday:
                      </li>
                  </ul>
                </div>
                <div className="col-1">
                  <ul>
                      <li className="forecast-emoji">
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
                      <li className="forecast-temp">
                          24° <span className="temp-low">(14°)</span>
                      </li>
                  </ul>
                </div>
            </div>
        </div>
    );
}