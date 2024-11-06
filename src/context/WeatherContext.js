import { createContext, useContext, useEffect, useState } from "react";

//I found this api key on the internet (github)
const ApiKey = "0FfahjVhFtYZahAJNm2iN3:2JUqX0tyOMzWLti1jVI3p7"

const WeatherContext = createContext({});

// const [location, setLocation] = useState({
//     country: '',
//     state: '',
//     city: '',
//     latitude: '',
//     longitude: '',
//     ip: ''
// });

export function WeatherProvider({ children }) {

    const [cities, setCities] = useState(["İstanbul", "Ankara", "Kocaeli", "Eskişehir", "Bilecik"]);
    const [city, setCity] = useState('istanbul');
    const [weather, setWeather] = useState({});

    // const _city = useCity();

    useEffect(() => {
        // console.log(_city);

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
        setWeather,
        cities,
        setCities
    }

    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
}

// function useCity() {
//     const [city, setCity] = useState(null);

//     useEffect(() => {
//         const fetchLocation = async () => {
//             try {
//                 const response = await fetch('https://geolocation-db.com/json/');
//                 const location = await response.json();
//                 console.log(location.city);
//                 setCity(location.city);
//             } catch (error) {
//                 console.error("Error fetching location:", error);
//             }
//         };

//         fetchLocation();
//     }, []);

//     return city;
// }

export const useWeather = () => { return useContext(WeatherContext); }