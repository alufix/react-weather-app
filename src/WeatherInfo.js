import React from "react"; 
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    
    <div className="WeatherInfo">
        <div className="Today">
        <div className="row justify-content-center text-center">
          <div className="mx-auto" styles="border: none">
            <h1 className="city" id="city-name">
              {props.data.city}
            </h1>
          </div>
        </div>

        <ul>
          <div className="row">
            <div className="col-12">
              <ul>
                  <li id="today-time">
                    Last updated - <FormattedDate date={props.data.date} />
                    </li>
              </ul>          
            </div>
          </div>
          <div className="row today">
            <div className="col-5">
              <ul>
                  <li id="description">{props.data.description}</li>
              </ul>
            </div>

            <div className="col-2">
              <img
                src={props.data.iconUrl}
                alt={props.data.description} 
                id="emoji"
                width="50px"
              />
            </div>

            <div className="col-4">
              <div className="weather-temperature">
                <ul>
                  <li>
                      <span id="temp-today">{Math.round(props.data.temperature)}</span>
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
</div>
    );
    }