import { createContext, useContext, useEffect, useState } from "react";

const ApiKey = '0FfahjVhFtYZahAJNm2iN3:2JUqX0tyOMzWLti1jVI3p7';

const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
    const _city = useCity();
    const [cities, setCities] = useState(["Kocaeli","İstanbul", "Ankara", "Eskişehir", "Bilecik"]);
    const [city, setCity] = useState(_city ?? 'Kocaeli');
    const [weather, setWeather] = useState({}); 

    useEffect(() => {
        fetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `apikey ${ApiKey}`
            }
        })
            .then(response => response.json())
            .then(data => { setWeather(data); console.log(data); })
            .catch(error => console.error("Weather API fetch error:", error));

        return () => { setWeather({}) }

    }, [city]);

    useEffect(() => {
        if (_city && !cities.some((x) => x.toLowerCase() == _city.toLowerCase()) && cities.length != 0) {
            console.log("Your location added on select:", _city);
            setCities((prevCities) => [_city, ...prevCities]);
            setCity(_city); // Eklenen konumu otomatik olarak seçiyoruz
        } else if(_city) {
            console.log("Your location already added on select");
        }
    }, [_city]);

    const values = {
        city,
        setCity,
        weather,
        setWeather,
        cities,
        setCities
    };

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
}

function useCity() {
    const [city, setCity] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('https://geolocation-db.com/json/');
                const location = await response.json();
                setCity(location.state);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, []);

    return city;
}

export const useWeather = () => useContext(WeatherContext);
