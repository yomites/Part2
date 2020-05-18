import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const Countries = ({ countriesToShow}) => {

  if (countriesToShow.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if (countriesToShow.length === 1) {
    return (
      <div>
        {countriesToShow.map(country =>
          <OneCountryDataDisplay
            key={country.name} country={country} />
        )}
      </div>
    )
  }
  else if (countriesToShow.length > 1
    || countriesToShow.length <= 10) {
    return (
      <div>
        {countriesToShow.map(country =>
          <Country key={country.name} country={country} />  
        )}
      </div>
    )
  }
  return (
    <div>
      <OneCountryDataDisplay country={countriesToShow} />
    </div>
  )
}

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

const Weather = ({ weather }) => {
  console.log('Weather New', weather.weather_icons)
  if (weather.weather_icons===undefined) {
    return (
      <div></div>
    )
  } else {
  return (
    <div>
      <b>temperature: {weather.temperature} °C</b>
      <WeatherIcon image={weather.weather_icons} />
      <b>wind: {weather.wind_speed} mph direction {weather.wind_dir}</b>
    </div>
  )}
}

const WeatherIcon = ({ image }) => {
  return (
    <div>
      <img src={image} alt="weatherImage" height="50" width="50"/>
    </div>
  )
}

const CountryFlag = ({ flag }) => {
  return (
    <div>
      <img src={flag} alt=".svg" height="100" width="120"/>
    </div>
  )
}

const Languages = ({ languages }) => {
  return (
    <div>
      <ul>
        {languages.map(language =>
          <Language key={language.name} language={language} />
        )}
      </ul>
    </div>
  )
}

const Language = ({ language }) => {
  return (
    <div>
      <li>
        {language.name}
      </li>
    </div>
  )
}

const Country = ({ country }) => {

  const [ countryName, setCountryName ] = useState('')
 
  if (!countryName) {
    return (
      <div>
        {country.name} 
        <button onClick={() => setCountryName(country
        )}>show </button>
      </div>
    )
  }
  return (
    <div>
      <Countries countriesToShow = {country} />
    </div>
  )
}

const App = (props) => {

  const [ countries, setCountries ] = useState([])
  const [ countrySearch, setCountrySearch ] = useState('')
  const [ countriesToShow, 
    setCountriesToShow ] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
   console.log('render', countries.length, 'countries')

  const countriesSearchFunction =
    (countriesArray, event) => {
      const resultArray =
        countriesArray.filter(element =>
          element.name.toUpperCase()
            .includes(event.target.value.toUpperCase()))

      return resultArray
    }

  const handleNameSearchChange = (event) => {
    if ((event.target.value.length) > 0) {
        console.log('handleNameSearchChange',
         event.target.value)
      setCountrySearch(event.target.value)
         console.log('Countries to show', countriesToShow)
      setCountriesToShow(
        countriesSearchFunction(countries, event))
    } else {
      setCountrySearch('')
      setCountriesToShow([])
    }

  }

  return (
    <div>
      find countries<input type="text"
        value={countrySearch}
        placeholder="search country by name"
        onChange={handleNameSearchChange} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  )
}

export default App