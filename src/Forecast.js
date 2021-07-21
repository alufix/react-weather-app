import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="future-days" id="forecast">
        <ul>
          <div id="day2">
            <div className="row">
              <div className="col-6">
                <ul>
                    <li className="forecast-date" id="day2-date">
                        Tuesday:
                    </li>
                </ul>
              </div>
              <div className="col-1">
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
                        24° <span className="temp-low">14°</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
