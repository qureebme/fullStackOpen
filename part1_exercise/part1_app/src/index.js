import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    return ( <h1> { props.course } </h1>
    )
}

const Content = (props) => {
  return(
    <>
    <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
    <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
    <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
    return (
      <p> Number of exercises { props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises } </p>
    )
}

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
      ]}

  return (
    <div>
      <Header course = { course.name }/>
      <Content course = { course } />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render( < App / > , document.getElementById('root'));
