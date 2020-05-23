import React from 'react'

const Language = ({ language }) => {
  return (
    <div>
      <li>
        {language.name}
      </li>
    </div>
  )
}

export default Language