import React from "react"; 
import FormattedDate from "./FormattedDate";
import WeatherBackground from "./WeatherBackground"; 
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon"; 

export default function WeatherInfo(props) {
  
    return (
    <div className="WeatherInfo">
      <div className="Today">
        <div className="row justify-content-center text-center">
          <div className="mx-auto" styles="border: none">
            <h1 className="city" id="city-name">
              {props.data.city}
            </h1>
          </div>
        </div>

        <ul>
          <div className="row">
            <div className="col-11">
              <ul>
                  <li id="today-time">
                    Last updated - <FormattedDate date={props.data.date} />
                    </li>
              </ul>          
            </div>
            <div className="col">
              <WeatherBackground code={props.data.icon} desc={props.data.description} />
            </div>
          </div>
          <div className="row today">
            <div className="col-5">
              <ul>
                <li id="description">{props.data.description}</li>
              </ul>
            </div>

            <div className="col-2">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="col-4">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </ul>
  </div>
</div>
    );
    }