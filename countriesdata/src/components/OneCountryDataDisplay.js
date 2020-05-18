import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weathers from './Weathers'
import Languages from './Languages'
import CountryFlag from './CountryFlag'

const OneCountryDataDisplay = ({ country }) => {

    const api_key = process.env.REACT_APP_API_KEY
    const access_key = api_key
    const query = country.capital
  
    const params = {
      access_key: access_key, 
      query: query
    }
    
    const [ capitalCityWeather, setCapitalCityWeather ] = useState({})
   
    useEffect(() => {
      console.log('weather')
      axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        console.log('promise fulfilled')
        setCapitalCityWeather(response.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    const weatherInfo = Object.entries(capitalCityWeather)
    console.log('Information', weatherInfo)
    
    return (
      <div>
        <h2>
          {country.name}
        </h2>
        capital {country.capital} <br />
        population {country.population}
        <p>
          <b>
            languages
          </b>
        </p> 
        <Languages languages={country.languages} />
        <CountryFlag flag={country.flag} />
        <h2>Weather in {country.capital}</h2>
        {weatherInfo.map(weathers =>
            <Weathers key={weathers.toString()} weathers={weathers} />
          )}
      </div>
    )
  }
  
  export default OneCountryDataDisplay