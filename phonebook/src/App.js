import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas'}]) 
  const [ newName, setNewName ] = useState('')
  console.log('The person added:', persons)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = ({ person }) => {
    console.log('Person:', person)
    return (
      <div>
        {person.name}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App