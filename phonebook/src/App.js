import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ mobileNumber, setMobileNumber ] = useState('')
  console.log('The person added:', persons)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: mobileNumber,
    }
//    console.log('Persons and new name:', persons, newName
        setPersons(persons.concat(personObject))
        setNewName('')
        setMobileNumber('')
  }

  const handleMobileNumberChange = (evt) => {
    console.log('handleMobileNumberChange', evt.target.value)
    setMobileNumber(evt.target.value) 
  }

  const handleNameChange = (event) => {
    console.log('handleNameChange persons',persons)
    console.log('handleNameChange', event.target.value)
    const arr = persons.filter(element => 
      element.name.toUpperCase()===event.target.value.toUpperCase())

      if (arr.length===1) {
        console.log('Arr array', arr)
        const newName = arr[0].name
        window.alert(newName + ' is already added to phonebook')
      } else
      return (
      setNewName(event.target.value) 
      )    
  }

  const Person = ({ person }) => {
    console.log('Person:', person)
    return (
      <div>
        {person.name} {person.number}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" value={newName} 
          placeholder="Enter name here" onChange={handleNameChange} />
        </div>
        <div>
          number: <input type="text" value={mobileNumber}
          placeholder="Enter phone number here" onChange={handleMobileNumberChange} /></div>
        <div>
          <button type="submit">
            add
          </button>
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