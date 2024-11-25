import React from 'react';
import './WeatherDisplay.css'; // Import the CSS file
const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="weather-display-wrapper">
      <div className="weather-display">
        <h2>{weatherData.name}</h2>
        <h3>{weatherData.main.temp}°C</h3>
        <p>{weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
