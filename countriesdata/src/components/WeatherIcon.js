import React from 'react'

const WeatherIcon = ({ image }) => {
    return (
      <div>
        <img src={image} alt="weatherImage" height="50" width="50"/>
      </div>
    )
  }
  
  export default WeatherIcon