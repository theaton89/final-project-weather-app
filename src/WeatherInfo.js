import React from "react";
import FormattedDate from "./FormattedDate";

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
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°F</span>
            </span>
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
