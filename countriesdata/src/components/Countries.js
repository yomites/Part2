import React from 'react'
import Country from './Country'
import OneCountryDataDisplay from './OneCountryDataDisplay'

const Countries = ({ countriesToShow }) => {

    if (countriesToShow.length > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
    if (countriesToShow.length === 1) {
      return (
        <div>
          {countriesToShow.map(country =>
            <OneCountryDataDisplay
              key={country.name} country={country} />
          )}
        </div>
      )
    }
    if (countriesToShow.length > 1
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

  export default Countries 