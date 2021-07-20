import React from "react"; 
import axios from "axios";  

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`)
    }
    let apiKey = "df0e4203de8f0cf1987569b54e21756c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);

    return (
        <h2>Hello from Weather</h2>
    );
}