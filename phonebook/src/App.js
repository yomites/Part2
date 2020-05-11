import React, { useState, useEffect } from 'react';
import './App.css';
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchNameForm from './components/SearchNameForm'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [nameToShow, setNameToShow] = useState([])

  useEffect(() => 
  {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
      setNameToShow(response.data)
    })
  }, [])
  console.log('render', persons.length, 'persons')

  console.log('The persons to show:', nameToShow)

  const addPerson = (event) => 
  {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: mobileNumber,
    }
    console.log('Persons and new name:', persons, newName)
    setPersons(persons.concat(personObject))
    setNameToShow(nameToShow.concat(personObject))
    setNewName('')
    setMobileNumber('')
  }

  const myArray = (anArray, evt) => 
  {
    const arr = anArray.filter(element =>
      element.name.toUpperCase().includes
        (evt.target.value.toUpperCase()))
    return arr
  }

  const handleNameSearchChange = (event) => 
  {
    console.log('handleNameSearchChange',
      event.target.value)
    setNameSearch(event.target.value)
    myArray(persons, event)

    setNameToShow(myArray(persons, event))
  }

  const handleMobileNumberChange = (evt) => 
  {
    console.log('handleMobileNumberChange',
      evt.target.value)
    setMobileNumber(evt.target.value)
  }

  const duplicateNameChecker = (personsListArray, evt) =>
  {
    const arr = personsListArray.filter(element =>
      element.name.toUpperCase() ===
      evt.target.value.toUpperCase())

    if (arr.length === 1) {
      console.log('Arr array', arr)
      const newName = arr[0].name
      window.alert(newName +
        ' is already added to phonebook')
    } else
    return (
      setNewName(evt.target.value)
    )
  }

  const handleNameChange = (event) => 
  {
    console.log('handleNameChange persons', persons)
    console.log('handleNameChange', event.target.value)
    duplicateNameChecker(persons, event)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {SearchNameForm(nameSearch, handleNameSearchChange)}
      {AddPersonForm(addPerson, newName, 
        handleNameChange, mobileNumber, 
        handleMobileNumberChange)}
      <h2>Numbers</h2>
      <Persons nameToShow={nameToShow} />
    </div>
  )
}

export default App