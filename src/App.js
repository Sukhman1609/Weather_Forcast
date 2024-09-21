import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CitySearch from './components/CitySearch';
import CurrentWeather from './components/CurrentWeather';
import ForecastCard from './components/ForecastCard';
import TemperatureToggle from './components/TemperatureToggle';
import './App.css';

const API_KEY = '87840df7aaf5eba6a2e1ae81d9e990ba';  

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState('metric'); 
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null); 
    } catch (err) {
      setError('City not found or network issue');
    }
  }, [unit]); 

  
  const fetchForecast = useCallback(async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );
      
      const dailyForecast = response.data.list.filter(item =>
        new Date(item.dt_txt).getHours() === 12
      );
      setForecastData(dailyForecast);
    } catch (err) {
      setError('Error fetching forecast data');
    }
  }, [unit]);

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city, unit, fetchWeather, fetchForecast]); 

  return (
    <div className="App">
      <h1>WEATHER FORECAST</h1>
      <CitySearch setCity={setCity} />
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} />
          <TemperatureToggle unit={unit} setUnit={setUnit} />
          <h3>5-Day Forecast</h3>
          <div className="forecast-container">
            {forecastData.length > 0 ? (
              forecastData.map((forecast, idx) => (
                <ForecastCard key={idx} day={forecast} />
              ))
            ) : (
              <p>Loading forecast...</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
