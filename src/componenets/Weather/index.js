import { useEffect } from "react";
import { useWeather } from "../../context/WeatherContext"

export default function Weather() {

    const { weather, setWeather } = useWeather();

    return <>
        {Object.keys(weather).length == 0
            && <div className="weather">
                <div className="days">
                    <div>Please</div>
                    <div>wait</div>
                    <div>....</div>
                </div>
            </div>}
        {Object.keys(weather).length == 0 || weather.success == false
            && <div>{weather.message}</div>}
        {Object.keys(weather).length != 0 && weather.success == true &&
            <>
                <div className="weather">
                    {weather.result.map((weather, index) => {
                        return <div className={`days ${index == 0 && "active"}`} key={index} >
                            <div>
                                {weather.day}
                            </div>
                            <div>
                                <img src={weather.icon} />
                            </div>
                            <div className="degree">
                                <span>{Math.floor(weather.min)}°</span>
                                <span>{Math.floor(weather.max)}°</span>
                            </div>
                        </div>
                    })}
                </div>
            </>
        }


    </>
}
