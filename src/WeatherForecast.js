import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img src={props.icon} className="ForecastIcon" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">85°</span>
            <span className="WeatherForecast-temperature-min">72°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
