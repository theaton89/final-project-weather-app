import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherForecastIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              {Math.round(props.data.temperature)}°F
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
