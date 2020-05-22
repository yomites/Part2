import React from 'react'

const Person = ({ person, deleteButton }) => {
  
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => deleteButton(person.id, person.name)}>
        Delete
      </button>
    </div>
  )
}

export default Person