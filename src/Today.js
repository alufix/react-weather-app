import React from "react";

export default function Today() {
  return (
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
            <li id="today-time">Last updated - Mon 16:44</li>
          </div>
        </div>
        <div className="row today">
          <div className="col-5">
            <li id="description">sunny</li>
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
              <li>
                <span id="temp-today">19</span>
                <span id="degrees">°</span>
                <span id="degrees-units">
                  <a href="www.google.com" id="celsius-link" className="active">
                    C
                  </a>{" "}
                  |
                  <a href="www.google.com" id="fahrenheit-link">
                    F
                  </a>
                </span>
              </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
