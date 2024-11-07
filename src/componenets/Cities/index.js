import { useEffect } from "react";
import { useWeather } from "../../context/WeatherContext"

export default function Cities() {

    const { city, setCity, cities } = useWeather();

    return <div className="search">
        <select onChange={(e) => { setCity(e.target.value); }} value={city}>
            {cities.map((citys, index) => {
                return <option value={citys.toLowerCase()} key={city+index}>{citys}</option>
            })}
        </select>
    </div>
}
