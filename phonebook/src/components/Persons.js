import React from 'react'
import Person from './Person'

const Persons = ({ persons, nameSearch, nameToShow }) => {
  console.log('Persons name to show', persons)
  if (nameSearch === '') {
    return (
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </div>
    )
  } else
    return (
      <div>
        {nameToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </div>
    )
}

export default Persons