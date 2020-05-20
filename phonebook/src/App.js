import React, { useState, useEffect } from 'react';
import './App.css';
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchNameForm from './components/SearchNameForm'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [nameToShow, setNameToShow] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    console.log('handleNameChange persons', persons)
    console.log('handleNameChange', event.target.value)
    duplicateNameChecker(persons, event)
  }

  const handleMobileNumberChange = (evt) => {
    console.log('handleMobileNumberChange',
      evt.target.value)
    setMobileNumber(evt.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: mobileNumber,
    }

    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setMobileNumber('')
      })
  }

  const duplicateNameChecker = (personsListArray, evt) => {
    const arr = personsListArray.filter(element =>
      element.name.toUpperCase() ===
      evt.target.value.toUpperCase())

    if (arr.length === 1) {
      console.log('Arr array', arr)
      const newName = arr[0].name
      window.alert(`${newName} is already added to phonebook`)
    } else
      setNewName(evt.target.value)
  }

  const myArray = (personsArray, evt) => {
    const arr = personsArray.filter(element =>
      element.name.toUpperCase().includes
        (evt.target.value.toUpperCase()))
    return arr
  }

  const handleNameSearchChange = (event) => {
    const personsCopy = [ ...persons ]
    console.log('handleNameSearchChange',
      event.target.value)
    setNameSearch(event.target.value)
    setNameToShow(myArray(personsCopy, event))
  }

  const deletePerson = (id, name) => {

    const personsCopy = [ ...persons ]
    console.log('ID and name of person to delete', id, name)  
    const choice = window.confirm(`Delete ${name}?`)
    
    if (choice) {
      personService.del(id).then(response => {
        setPersons(personsCopy.filter(person => 
          person.id !== id && person.name !== name))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchNameForm nameSearch={nameSearch}
        handleNameSearchChange={handleNameSearchChange} />
      <AddPersonForm addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        mobileNumber={mobileNumber}
        handleMobileNumberChange={handleMobileNumberChange} />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameSearch={nameSearch}
        nameToShow={nameToShow}
        deleteButton={deletePerson} />
    </div>
  )
}

export default App