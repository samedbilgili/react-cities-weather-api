import './App.css';
import Cities from './componenets/Cities';
import Weather from './componenets/Weather'; 
import { useEffect, useState } from 'react';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  const [location, setLocation] = useState({});


  useEffect(() => {
    fetch("https://geolocation-db.com/json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      })
      .catch((error) => console.error("Error fetching location:", error));
  }, []);

  return (
    <WeatherProvider>
      <Cities />
      <Weather />
    </WeatherProvider>
  );
}

export default App;
