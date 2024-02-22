import React, { useState } from 'react'
import Weather from './Weather';
import axios from 'axios';
import Welcome from './Welcome';
import { NotFound } from './NotFound';

function Page() {

  // weather and location data
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // weather API url
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=06da193ef83a3862b9c4003b9f7770cb`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setWeatherData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
      setLocation('')
    }
  }

  const handleSearch = (event) => {
    // Handle search with validation (e.g., minimum length)
    if (event.target.value.length >= 3 && event.key === 'Enter') {
      setLocation(event.target.value);
    }
  };

  if (isLoading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return (
      <NotFound error={error} searchterm={location}/>
    );
  }

  return (
    <>
      <div className="home-page">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="search" />
      </div>
      <div>
      {isLoading && <p>Loading weather data...</p>}
      {error && <div><h2>Error: {error}</h2><p>Please try again.</p></div>}
      {weatherData !== null && weatherData !== undefined && Object.keys(weatherData).length > 0 && (
        <Weather data={weatherData} />
      ) || (
        <Welcome onSearch={handleSearch} />
      ) || (
        <NotFound />
      )}
      </div>
    </>
  );
}

export default Page;
