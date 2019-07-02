import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    return ( <h1> { props.course } </h1>
    )
}

const Total = (props) => {
    return (
      <p> Number of exercises { props.part1x + props.part2x + props.part3x } </p>
    )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = { course }/>
      <p> {part1.name} {part1.exercises} </p>
      <p> {part2.name} {part2.exercises} </p>
      <p> {part3.name} {part3.exercises} </p>
      <Total part1x={part1.exercises} part2x={part2.exercises} part3x={part3.exercises}/>
    </div>
  )
}

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
