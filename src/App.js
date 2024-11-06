import './App.css';
import Cities from './componenets/Cities';
import Weather from './componenets/Weather';
import { useEffect, useState } from 'react';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  // const [location, setLocation] = useState({
  //   country: '',
  //   state: '',
  //   city: '',
  //   latitude: '',
  //   longitude: '',
  //   ip: ''
  // });

  // useEffect(() => {
  //   // API'ye JSONP isteği yapacak bir script ekliyoruz
  //   const script = document.createElement('script');
  //   script.src = 'https://geolocation-db.com/jsonp?callback=callback';
  //   document.body.appendChild(script);

  //   // JSONP yanıtını işleyen callback fonksiyonunu tanımlıyoruz
  //   window.callback = (locationData) => {
  //     setLocation({
  //       country: locationData.country_name,
  //       state: locationData.state,
  //       city: locationData.city,
  //       latitude: locationData.latitude,
  //       longitude: locationData.longitude,
  //       ip: locationData.IPv4
  //     });
  //   };
  // });

  return (
    <WeatherProvider>
      <Cities />
      <Weather />
      {/* {JSON.stringify(location)} */}
    </WeatherProvider>
  );
}

export default App;
