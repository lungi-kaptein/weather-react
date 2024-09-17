
import React from "react";
import Weather from "./weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Cape Town" />
      <footer>
        This project was coded by <a href="https://lungi-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Lungi Kaptein</a> and is {" "}
        <a href="https://github.com/lungi-kaptein/weather-react" target="_blank" rel="noopener noreferrer"> 
        open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
