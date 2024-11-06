import { useEffect } from "react";
import { useWeather } from "../../context/WeatherContext"

export default function Cities() {

    const cities = ["İstanbul", "Ankara", "Kocaeli", "Eskişehir", "Bilecik"];

    const { city, setCity } = useWeather();

    return <div className="search">
        <select onChange={(e) => { setCity(e.target.value); }} value={city}>
            {cities.map((citys, index) => {
                return <option value={citys.toLowerCase()} key={index}>{citys}</option>
            })}
        </select>
    </div>
}
