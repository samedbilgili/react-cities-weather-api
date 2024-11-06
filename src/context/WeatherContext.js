import { createContext, useContext, useEffect, useState } from "react";

//I found this api key on the internet (github)
const ApiKey = "0FfahjVhFtYZahAJNm2iN3:2JUqX0tyOMzWLti1jVI3p7"

const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
    const [city, setCity] = useState("istanbul");
    const [weather, setWeather] = useState({});

    useEffect(() => {
        console.log("city",`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`);

        fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `apikey ${ApiKey}`
            }
        })
            .then(response => response.json())
            .then(data => { setWeather(data); console.log(data); })
            .catch(error => console.log(error))

        return (() => setWeather({}));

    }, [city])

    const values = {
        city,
        setCity,
        weather,
        setWeather
    }

    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
}

export const useWeather = () => { return useContext(WeatherContext); }