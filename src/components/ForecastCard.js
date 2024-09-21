import React from 'react';

const ForecastCard = ({ day }) => {
  const date = new Date(day.dt * 1000); 
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); 

  return (
    <div className="forecast-card">
      <h4>{dayName}</h4>
      <div>High: {day.main.temp_max}°</div>
      <div>Low: {day.main.temp_min}°</div>
      <img
        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
        alt={day.weather[0].description}
      />
      <div>{day.weather[0].description}</div>
    </div>
  );
};

export default ForecastCard;
