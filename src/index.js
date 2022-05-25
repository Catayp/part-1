//unicafe
// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// const Statistics = ({good, neutral, bad}) => {
//   if(good == 0 && neutral == 0 && bad == 0){
//     return(
//       <>
//       <p>No feedback given</p>
//       </>
//     )
//   }
//   return(
//     <>
//     <table>
//       <tbody>
//         <Statistic text="Good" value={good} /> 
//         <Statistic text="Neutral" value={neutral} />
//         <Statistic text="bad" value={bad} />
//         <Statistic text="all" value={good + neutral + bad} />
//         <Statistic text="average" value={(good + neutral + bad)/3} />
//         <Statistic text="positive" value={100*good/(good + neutral + bad)} />
//       </tbody>
//     </table>
//     </> 
//   ) 
// }
// const Statistic = ({text, value}) => {
//   return(
//     <>
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//     </>
//   )
// }
// const Button = ({click, text}) => {
//   return(
//     <>
//     <button onClick={click}>
//       {text}
//     </button>
//     </>
//   )
// }
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const clickGood = () => setGood(good + 1)
//   const clickNeutral = () => setNeutral(neutral + 1)
//   const clickBad = () => setBad(bad +1)

//   return (
//     <div>
//       <h1>
//         give feedback
//       </h1>
//       <Button click={clickGood} text="Good" />
//       <Button click={clickNeutral} text="Neutral" />
//       <Button click={clickBad} text="Bad" />
//       <h2>
//         statistics
//       </h2>
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// const container = document.getElementById('root')
// const root = createRoot(container);
// root.render(<App />)
//1.1 - 1.5 courseinfo 
// import React from 'react';
// import ReactDOM from 'react-dom';
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
  
//   return (
//     <div>
//       <Header title = {course.name} />
//       <Content part = {course.parts} />
//       <Total total = {course.parts} />
//     </div>
//   )
// }
// const Header = (prop) => {
//   return(
//     <h1>{prop.title}</h1>
//   )
// }
// const Total = (prop) => {
//   return(
//     <p>
//       Number of exercises: {prop.total[0].exercises + prop.total[1].exercises + prop.total[2].exercises}
//     </p>
//   )
// }
// const Content = (prop) => {
//   return(
//     <div>
//         <Part name = {prop.part[0].name} exercise = {prop.part[0].exercises} />
//         <Part name = {prop.part[1].name} exercise = {prop.part[1].exercises}/>
//         <Part name = {prop.part[2].name} exercise = {prop.part[2].exercises} />
//     </div>
//   )
// }
// const Part = (prop) => {
//   return(
//     <p>
//       {prop.name} = {prop.exercise}
//     </p>
//   )
// }
// ReactDOM.render(
//   React.createElement(App, null),
//   document.getElementById('root')
// ); 
//---------------------------------------------------------------------------
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
const point = []
const Anecdot = ({anec,i})=>{
  return(
    <>
    <p>{anec[i]}</p>
    </>
  ) 
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const num = () => {
    let random = Math.round(Math.random()*(anecdotes.length - 0) + 0)
    setSelected(random)
  }
  return (
    <div>
      <Anecdot anec={props.anecdotes} i={selected} />
      <button onClick={num}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App anecdotes={anecdotes} />)