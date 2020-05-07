import React from 'react'

const Total = ({ parts }) => {
    console.log('Total component', parts)
    const exercises = parts.map(p => p.exercises)
    const total = exercises.reduce((s, p) => s + p)
    return (
      <div>
        <b>
          total of {total} exercises
        </b>
      </div>
  
    )
  }

  export default Total