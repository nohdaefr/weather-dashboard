import React from 'react';
import './ForCast.css'; // Import the CSS file

const Forecast = ({ forecastData }) => {
    if (!forecastData) return null;

    // Filter forecast for one entry per day (e.g., "12:00:00")
    const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
    );

    return (
        <div className="forcast-display">
            <h3>5-Day Forecast</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {dailyForecast.map((day, index) => (
                    <div key={index}>
                        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <p>{day.main.temp}°C</p>
                        <p>{day.weather[0].main}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
