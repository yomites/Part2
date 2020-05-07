import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

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

ReactDOM.render(<App courses={courses} header={header} />, 
  document.getElementById('root'))