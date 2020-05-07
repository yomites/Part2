import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    console.log('Course component', course)
    return (
      <div>
        <h2>
          <Header name={course.name} />
        </h2>
        <Content parts={course.parts} />
      </div>
    )
  }

  export default Course