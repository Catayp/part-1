
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header title = {course.name} />
      <Content part = {course.parts} />
      <Total total = {course.parts} />
    </div>
  )
}
const Header = (prop) => {
  return(
    <h1>{prop.title}</h1>
  )
}
const Total = (prop) => {
  return(
    <p>
      Number of exercises: {prop.total[0].exercises + prop.total[1].exercises + prop.total[2].exercises}
    </p>
  )
}
const Content = (prop) => {
  return(
    <div>
        <Part name = {prop.part[0].name} exercise = {prop.part[0].exercises} />
        <Part name = {prop.part[1].name} exercise = {prop.part[1].exercises}/>
        <Part name = {prop.part[2].name} exercise = {prop.part[2].exercises} />
    </div>
  )
}
const Part = (prop) => {
  return(
    <p>
      {prop.name} = {prop.exercise}
    </p>
  )
}
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
); 
