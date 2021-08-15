import React from "react"; 
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max); 
        return `${temperature}`; 
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min); 
        return `${temperature}`; 
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return days[day];
    }

    return (
        <div className="row WeatherForecast">
            <div className="col-5">
                <ul>
                    <li className="forecast-date">
                        {day()}:
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <ul>
                    <li className="forecast-emoji">
                        <WeatherIcon code={props.data.weather[0].icon} size={45} />
                    </li>
                </ul>
            </div>
            <div className="col-4">
                <ul>
                    <li className="forecast-temp">
                        {maxTemperature()}° <span className="temp-low">({minTemperature()}°)</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}