import React from "react"; 

export default function WeatherIcon(props) {
    let iconUrl = `https://openweathermap.org/img/wn/${props.code}@2x.png`

    return (
        <img 
            src= {iconUrl}
            alt="..." 
            className="forecast-emoji" 
            width={props.size}
        />
    );
}