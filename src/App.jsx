// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import axios from 'axios';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const apiKey = '21d523639c9d35d45e9f2c63454f4aa0';

  const fetchWeather = async (city) => {
    try {
      if (!city.trim()) {
        alert('Please enter a valid city name!');
        return;
      }

      const encodedCity = encodeURIComponent(city);

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=${apiKey}`
      );
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&units=metric&appid=${apiKey}`
      );
      setForecastData(forecastResponse.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert('City not found. Please check the city name.');
        } else if (error.response.status === 401) {
          alert('Invalid API key. Please check your API key.');
        } else {
          alert('An error occurred: ' + error.response.data.message);
        }
      } else {
        alert('An unknown error occurred. Please try again.');
      }
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <div className="app-container">
              <h1>Weather Dashboard</h1>
              <SearchBar onSearch={fetchWeather} />
              <WeatherDisplay weatherData={weatherData} />
              <Forecast forecastData={forecastData} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
