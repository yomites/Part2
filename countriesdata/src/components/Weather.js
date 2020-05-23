import React from 'react'
import WeatherIcon from './WeatherIcon'

const Weather = ({ weather }) => {

    console.log('Weather New', weather.weather_icons)
    if (weather.weather_icons===undefined) {
      return (
        <div>
          
        </div>
      )
    }
    return (
      <div>
        <b>temperature: {weather.temperature} °C</b>
        <WeatherIcon image={weather.weather_icons} />
        <b>wind: {weather.wind_speed} mph direction {weather.wind_dir}</b>
      </div>
    )}

  export default Weather