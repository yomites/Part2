import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ name }) => {
  return (
    <div>
      {name}   
    </div>   
  )
}

const Total = ({ parts }) => {
  console.log('Total component', parts)
  const exercises = parts.map(p => p.exercises)
  const total = exercises.reduce((s, p) => s + p)
  return(
    <div>
      <b>
        total of {total} exercises
      </b>
    </div>
    
  ) 
}

const Part = ({ part }) => {
  console.log('Part component part', part)
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log('Content component parts', parts)
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />)}
      <Total parts={parts} />
    </div>
  )
}

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

const App = () => {
  const header = "Web development curriculum"
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        },
        {
          name: 'Testing React Apps',
          exercises: 10,
          id: 5
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'React with Javascript',
      id: 3,
      parts: [
        {
          name: 'Web Applications',
          exercises: 5,
          id: 1
        },
        {
          name: 'Middlewares functionality',
          exercises: 4,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>{header}</h1>
      {courses.map(course => 
      <Course key={course.id} course={course} />
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))