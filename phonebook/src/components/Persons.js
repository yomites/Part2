import React from 'react'
import Person from './Person'

const Persons = ({ persons, nameSearch, nameToShow, deleteButton }) => {

  if (nameSearch === '') {
    return (
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person}
          deleteButton={deleteButton} />
        )}
      </div>
    )
  }else if (nameSearch !== '') {
    return (
      <div>
        {nameToShow.map(person =>
          <Person key={person.name} person={person}
          deleteButton={deleteButton} />
        )}
      </div>
    )
  } else
    return (
      <div>
        {nameToShow.map(person =>
          <Person key={person.name} person={person}
          deleteButton={deleteButton} />
        )}
      </div>
    )
}

export default Persons