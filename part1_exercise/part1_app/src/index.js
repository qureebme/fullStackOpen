import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    return ( <
        h1 > { props.course } < /h1>
    )
}

const Part = (props) => {
    return ( <
        >
        <
        p > { props.part } { props.ex } <
        /p>   < / >
    )
}

const Content = () => {

    const part = {
        part1: 'Fundamentals of React',
        part2: 'Using props to pass data',
        part3: 'State of a component'
    }
    const ex = { exercises1: 10, exercises2: 7, exercises3: 14 }

    return ( <
        div >
        <
        Part part = { part.part1 }
        ex = { ex.exercises1 }
        / > <
        Part part = { part.part2 }
        ex = { ex.exercises2 }
        / > <
        Part part = { part.part3 }
        ex = { ex.exercises3 }
        / > < /
        div >
    )
}

const Total = (props) => {
    return ( <
        p > Number of exercises { props.exercises1 + props.exercises2 + props.exercises3 } < /p>
    )
}


const App = () => {
        // const-definitions
        const course = 'Half Stack application development'

        const exercises1 = 10
        const exercises2 = 7
        const exercises3 = 14

        return ( <
            >
            <
            Header course = { course }
            /> 

            <
            Content /
            >
            <

            Total exercises1 = { exercises1 }
            exercises2 = { exercises2 }
            exercises3 = { exercises3 }
            / > < / >

        )
    }
    /*
    
    */

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();