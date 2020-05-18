import React from 'react'
import Weather from './Weather'

const Weathers = ({ weathers }) => {
    console.log('Weathers', weathers)
    return (
      <div>
        {weathers.map(weather =>
            <Weather key={weather.toString()} weather={weather} />
          )}
      </div>
    )
  }
 
  export default Weathers