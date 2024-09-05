import React from "react";
import "./Weather.css";

export default function Weather() {
    return <div className="Weather">
       <form>
        <div className="row">
            <div className="col-9">
        <input 
        type="search"
        placeholder="Enter a city.."
        className="form-control"
        />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary"/>
        </div>
        </div>
       </form>
      <h1>Cape Town</h1>
      <ul>
        <li>Thursday 08:00</li>
        <li>Clear with periodic clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
            <img 
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear with periodic clouds"/>
            10°C
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 1%</li>
                <li>Humidity: 64%</li>
                <li>Wind: 14 km/h</li>
            </ul>
        </div>
      </div>
    </div>
}

