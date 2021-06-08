import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecastIcon() {
  let [icon, setIcon] = useState(null);
  let [iconLoaded, setIconLoaded] = useState(false);

  function getIcon(response) {
    setIcon(response.data.weather[0].icon);
    setIconLoaded(true);
  }

  let apiKey = "b794ad181ed9eb7110f0ec8bbaa4f48d";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(getIcon);
  if (iconLoaded) {
    return icon;
  } else {
    return "not loaded";
  }
}
