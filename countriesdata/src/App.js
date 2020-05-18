import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Countries from './components/Countries'

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