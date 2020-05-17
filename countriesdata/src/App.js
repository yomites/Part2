import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const Countries = ({ countriesToShow}) => {
  console.log('CountriesToShow', countriesToShow)
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
  console.log('OneCountry country', country)
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
        )} value='' >show </button>
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

   console.log('Countries', countries)

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
      //   console.log('Countries to show', countriesToShow)
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