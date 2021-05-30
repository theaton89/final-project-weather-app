import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather" class="shadow p-3 mb-5 bg-white rounded">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Sunday, May 30</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">80</span>
              <span className="unit">°F</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 32%</li>
            <li>Wind: 13mph</li>
            <li>Precipitation: 23%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
