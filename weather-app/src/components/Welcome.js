import React from 'react';

export default function Welcome(props) {
  return (
    <section id="main-content" className="welcome-page">
      {/* Hero section with background image and captivating text */}
      <div className="hero">
        <h1>Explore the world's weather at your fingertips</h1>
        <p>
           - Get real-time weather updates, accurate forecasts, and insightful insights
          for any location, all packed into a beautiful and intuitive interface.
        </p>
      </div>

      {/* Feature section with icons and concise descriptions */}
      <div className="features">
        <h2>Discover the app's features:</h2>
        <div className="feature-list">
          <div className="feature">
            <i className="fas fa-map-marker-alt"></i>
            <h4>1. Pinpoint Your Location:</h4>
            <p>Automatically detect your location or search for any city or region.</p>
          </div>
          <div className="feature">
            <i className="fas fa-sun"></i>
            <h4>2, Detailed Weather Data:</h4>
            <p>View current temperature, feels like, high/low, humidity, wind, and more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}