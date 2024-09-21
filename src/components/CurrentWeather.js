import React from 'react';

const CurrentWeather = ({ weatherData }) => {
  const { name, main, weather } = weatherData;
  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <div className="weather-details">
        <div style={{fontSize:'20px'}}>Temperature: {main.temp}°</div>
        <div style={{fontSize:'20px'}}>Condition: {weather[0].description}</div>
        <div><img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].description } 
          style={{ width: '200px', height: '200px' }}
        /></div>
      </div>
    </div>
  );
};

export default CurrentWeather;
