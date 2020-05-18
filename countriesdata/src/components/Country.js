import React, { useState } from 'react'
import Countries from './Countries'

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
 
  export default Country