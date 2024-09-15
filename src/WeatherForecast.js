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
                <div className="col">
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

        </div>
    );
} else {
    const apiKey= "6abedda1ad6224fbft004155f03odf27";
    const apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
}
}