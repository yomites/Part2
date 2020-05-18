import React from 'react'
import Language from './Language'

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
 
  export default Languages