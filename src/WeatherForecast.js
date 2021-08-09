import React, { useState } from "react"; 
import "./WeatherForecast.css"; 
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
                <div className="row">
                    <div className="col-5">
                    <ul>
                        <li className="forecast-date">
                            {forecast[0].dt}:
                        </li>
                    </ul>
                    </div>
                    <div className="col-1">
                    <ul>
                        <li className="forecast-emoji">
                            <img
                                src={props.data.iconUrl}
                                alt={props.data.description}
                                id="emoji"
                                width="35px"
                            />
                        </li>
                    </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li className="forecast-temp">
                                [forecast[0].temp.max]° <span className="temp-low">({forecast[0].temp.min}°)</span>
                            </li>
                        </ul>
                    </div>
                </div>
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