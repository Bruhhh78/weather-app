import React from "react";

const CurrentWeather = ({ data }) => {
  return (
   <div className="p-5">
     <div className="weather bg-gray-500 text-white rounded-lg shadow-lg p-4">
      <div className="top flex justify-between items-center">
        <div>
          <p className="city font-semibold text-lg">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom flex justify-between items-center mt-4">
        <p className="temperature text-5xl font-semibold">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="details ml-4">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CurrentWeather;
