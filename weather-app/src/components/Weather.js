import React from 'react';

function Weather({ data }) {
  return (
    <div className="weather-card">
      <header className="city-info">
        <span className="city-name">{data.name}</span>
        {data.sys && (
          <span className="country bold p-1"> - {data.sys.country}</span>
        )}
      </header>
      <main className="weather-details">
        <h1 className="current-temperature">
          {data.main && data.main.temp.toFixed()}°F
        </h1>
        {data.weather && (
          <span className="weather-condition bold">{data.weather[0].main}</span>
        )}
      </main>
      <section className="additional-info">
        <ul>
          {data.main && (
            <>
              <li>
                Feels like: <span className="bold">{data.main.feels_like.toFixed()}°F</span>
              </li>
              <li>
                High: <span className="bold">{data.main.temp_max.toFixed()}°F</span>
              </li>
              <li>
                Low: <span className="bold">{data.main.temp_min.toFixed()}°F</span>
              </li>
              <li>
                Humidity: <span className="bold">{data.main.humidity}%</span>
              </li>
            </>
          )}
          {data.wind && (
            <li>
              Wind Speed: <span className="bold">{data.wind.speed.toFixed()} MPH</span>
            </li>
          )}
          {data.weather && (
            <li>
              Description: <span className="bold">{data.weather[0].description}</span>
            </li>
          )}
          {/* Add more fields here as needed */}
        </ul>
      </section>
    </div>
  );
}

export default Weather;