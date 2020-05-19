import React from 'react'

const SearchNameForm = ({ nameSearch, handleNameSearchChange }) => {
    return (
        <div>
            filter shown with<input type="text"
                value={nameSearch}
                placeholder="Search by name"
                onChange={handleNameSearchChange} />
        </div>
    )
}

export default SearchNameForm