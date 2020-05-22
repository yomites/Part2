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
      .then(initialPersons => {
        setPersons(initialPersons)
      }).catch(error => {
        alert(`The data could not be retrieved from the server!`)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleMobileNumberChange = (evt) => setMobileNumber(evt.target.value)

  const add_update_Person = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: mobileNumber,
    }

    const personsCopy = [...persons]
    const arr = personsCopy.filter(element =>
      element.name.toUpperCase() === newName.toUpperCase())

    if (arr.length === 1) {
      const choice = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (choice) {
        const id = arr[0].id
        const person = personsCopy.find(p => p.id === id)
        const changedPerson = { ...person, number: mobileNumber }
        personService
          .update(id, changedPerson)
          .then(returnedPerson => {
            setPersons(personsCopy
              .map(person => person.id !== id ? person : returnedPerson))
            setNewName('')
            setMobileNumber('')
          })
          .catch(error => {
            alert(`The person ${newName} was already deleted from server`)
            setPersons(personsCopy.filter(p => p.id !== id))
            setNewName('')
            setMobileNumber('')
          })
      } else {
        setNewName('')
        setMobileNumber('')
      }
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(personsCopy.concat(returnedPerson))
          setNewName('')
          setMobileNumber('')
        }).catch(error => {
          alert(`The person ${newName} could not be added to phonebook`)
          setPersons(personsCopy)
        })
    }
  }

  const myArray = (personsArray, evt) => {
    const arr = personsArray.filter(element =>
      element.name.toUpperCase().includes
        (evt.target.value.toUpperCase()))
    return arr
  }

  const handleNameSearchChange = (event) => {
    const personsCopy = [...persons]
    console.log('handleNameSearchChange',
      event.target.value)
    setNameSearch(event.target.value)
    setNameToShow(myArray(personsCopy, event))
  }

  const deletePerson = (id, name) => {

    const personsCopy = [...persons]
    console.log('ID and name of person to be deleted', id, name)
    const choice = window.confirm(`Delete ${name}?`)

    if (choice) {
      personService.del(id).then(returnedPersons => {
        setPersons(personsCopy.filter(person =>
          person.id !== id && person.name !== name))
      }).catch(error => {
        alert(`${name} was already deleted from the server`)
        setPersons(personsCopy.filter(p => p.id !== id))
      })
    }
    else {
      setNewName('')
      setMobileNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchNameForm nameSearch={nameSearch}
        handleNameSearchChange={handleNameSearchChange} />
      <AddPersonForm addPerson={add_update_Person}
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