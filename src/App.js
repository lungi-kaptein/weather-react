
import React from "react";
import Weather from "./weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Cape Town" />
      <footer>
        This project was coded by Lungi Kaptein and is {" "}
        <a href="https://github.com/lungi-kaptein/weather-react" target="_blank"> 
        open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
