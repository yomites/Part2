import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ course }) => {
  console.log('This course', course)
  return (
    <h1>{course.name}</h1>
  )
}

//const Total = ({ course }) => {
 // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
 // return(
 //   <p>Number of exercises {sum}</p>
 // ) 
//}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  const parts = [ ...course.parts ]
  console.log(parts)
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part}/>
      )} 
    </div>
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
    <div>
      <Header course={course} />
      <Content course={course} /> 
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))