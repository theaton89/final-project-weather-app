import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <p>
        This project was coded by{" "}
        <a
          href="https://www.youtube.com/channel/UC0rQDkXDNeidKnUafldmpdA"
          target="_blank"
          rel="noreferrer"
          title="Taylor Heaton's Site"
        >
          Taylor Heaton
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/theaton89/final-project-weather-app"
          target="_blank"
          rel="noreferrer"
          title="Taylor Heaton's Github"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://jovial-bose-b591a2.netlify.app"
          target="_blank"
          rel="noreferrer"
          title="Taylor Heaton's Netlify site"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </div>
  );
}

export default App;
