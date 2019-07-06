import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

let Header1 = () => (
  <h1>{"Give Feedback"}</h1>
)
let Header2 = () => (
  <h2>{"statistics"}</h2>
)
let Button = ({text, onclick}) =>(
  <button onClick={onclick}>{text}</button>
)

let Feedback = ({good, neutral, bad}) =>{
  return (
    <div>
      <Header2 />
      <p>{"Good"} {good} </p>
      <p>{"Neutral"} {neutral} </p>
      <p>{"Bad"} {bad} </p>
    </div>
  )
}

const App = () => {
  //const onClickHandler = () => console.log('clicked');
  const GoodClickHandler = () => setGood(good + 1);
  const NeutralClickHandler = () => setNeutral(neutral + 1);
  const BadClickHandler = () => setBad(bad + 1);
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header1 />
      <div className="buttons">
        <Button text="Good" onclick={GoodClickHandler}/>
        <Button text="Neutral" onclick={NeutralClickHandler}/>
        <Button text="Bad" onclick={BadClickHandler}/>
      </div>
      <div>
      <Feedback good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
