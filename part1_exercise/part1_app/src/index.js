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

const Content = (props) => {
  return(
    <>
    <p>{props.name0} {props.ex0}</p>
    <p>{props.name1} {props.ex1}</p>
    <p>{props.name2} {props.ex2}</p>
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course = { course }/>
      <Content name0={parts[0].name} name1={parts[1].name} name2={parts[2].name}
      ex0={parts[0].exercises} ex1={parts[1].exercises} ex2={parts[2].exercises}/>
      <Total part1x={parts[0].exercises} part2x={parts[1].exercises} part3x={parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
