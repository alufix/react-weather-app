import React, { useState } from "react"; 
import "./WeatherForecast.css"; 
import WeatherForecastDay from "./WeatherForecastDay";  
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false); 
    let [forecast, setForecast] = useState(null); 

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
 
    
    if (loaded) {
        return (
            <div className="WeatherForecast" id="forecast">
                    <WeatherForecastDay data={forecast[0]} />
            </div>
        );
    } else {
        let apiKey = "df0e4203de8f0cf1987569b54e21756c"; 
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;  
    };     
}