import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/monika-bauer1983/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Monika Bauer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MonikaBauer83/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
