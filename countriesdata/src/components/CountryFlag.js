import React from 'react'

const CountryFlag = ({ flag }) => {
  return (
    <div>
      <img src={flag} alt=".svg" height="100" width="120" />
    </div>
  )
}

export default CountryFlag