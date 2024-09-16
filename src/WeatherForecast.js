import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded]= useState(false);
    const [forecast, setForecast]= useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);

    }


    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                   {forecast.map(function (dailyForecast, index) {
                    if (index < 4) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        )
                    }
                   }
                   )}

                

            </div>

        </div>
    );
} else {
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return null;
}
}