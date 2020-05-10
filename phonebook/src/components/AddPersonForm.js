import React from 'react'

const AddPersonForm = (addPerson, newName,
    handleNameChange, mobileNumber,
    handleMobileNumberChange) => {
    return (
        <form onSubmit={addPerson}>
            <h2>add a new</h2>
            <div>
                name: <input type="text" value={newName}
                    placeholder="Enter name here"
                    onChange={handleNameChange} />
            </div>
            <div>
                number: <input type="text" value={mobileNumber}
                    placeholder="Enter phone number here"
                    onChange={handleMobileNumberChange} /></div>
            <div>
                <button type="submit">
                    add
            </button>
            </div>
        </form>
    )
}

export default AddPersonForm