import React, { useState } from "react"; 

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius"); 
    
    function showFahrenheit(event) {
        event.preventDefault(); 
        setUnit("fahrenheit"); 
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === `celsius`) {
        return (
            <span className="WeatherTemperature">
                <div className="weather-temperature">
                            <ul>
                    <li>
                        <span id="temp-today">{Math.round(props.celsius)}</span>
                        <span id="degrees">°</span>
                        
                        <span id="degrees-units">
                        C{" "}|{" "}
                        <a href="/" onClick={showFahrenheit} id="fahrenheit-link">
                            F
                        </a>
                        </span>
                    </li>
                    </ul>
                </div>
            </span>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32; 

        return (
            <span className="WeatherTemperature">
                <div className="weather-temperature">
                            <ul>
                    <li>
                        <span id="temp-today">{Math.round(fahrenheit)}</span>
                        <span id="degrees">°</span>
                        <span id="degrees-units">
                        <a href="/" onClick={showCelsius} id="fahrenheit-link">
                            C 
                        </a>{" "}|{" "}F
                        </span>
                    </li>
                    </ul>
                </div>
            </span>
        );
    }
}