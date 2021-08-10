import React from "react"; 

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "01d",
        "01n": "01n",
        "02d": "02d",
        "02n": "02n",
        "03d": "03d",
        "03n": "03n",
        "04d": "04d",
        "04n": "04n",
        "09d": "09d",
        "09n": "09n",
        "10d": "10d",
        "10n": "10n",
        "11d": "11d",
        "11n": "11n",
        "13d": "13d",
        "13n": "13n",
        "50d": "50d",
        "50n": "50n"
    };

    let iconUrl = `https://openweathermap.org/img/wn/${props.code}@2x.png`

    return (
        <img 
            src= {iconUrl}
            alt="..." 
            className="forecast-emoji" 
            width="45px"
             />
    );
}