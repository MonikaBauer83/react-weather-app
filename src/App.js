import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App container">
        <Weather defaultCity="Vienna" />
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
            href="https://github.com/MonikaBauer83/monikas-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://monikas-react-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
