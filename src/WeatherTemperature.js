import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
        <div className="weather-temperature">
            <span id="temp-today">{Math.round(props.celsius)}</span>
            <span id="degrees">°</span>
            <span id="degrees-units">C</span>
        </div>
    </div>
  );
}