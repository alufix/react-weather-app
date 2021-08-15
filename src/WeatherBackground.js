import React from "react";

export default function WeatherBackground(props) {
    const codeMapping = {
        "01d": "clear",
        "01n": "clear-night",
        "02d": "clouds",
        "02n": "cloudy-night2",
        "03d": "clouds",
        "03n": "cloudy-night2",
        "04d": "clouds",
        "04n": "cloudy-night2",
        "09d": "drizzle",
        "09n": "cloudy-night2",
        "10d": "rain",
        "10n": "cloudy-night2",
        "11d": "thunderstorm",
        "11n": "cloudy-night2",
        "13d": "snow",
        "13n": "cloudy-night2",
        "50d": "mist",
        "50n": "cloudy-night2"
    }

    let background = codeMapping[props.code]

    console.log(background);

    return (
        <div style={{ backgroundImage: `url(/${background}.png)`}}>
        </div>
    );
}