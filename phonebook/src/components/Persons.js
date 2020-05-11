import React from 'react'
import Person from './Person'

const Persons = ({ nameToShow }) => {
    console.log('Persons name to show', nameToShow)
    return (
      <div>
        {nameToShow.map(person =>
        <Person key={person.name} person={person} />
      )}
      </div>   
    )
  }

  export default Persons