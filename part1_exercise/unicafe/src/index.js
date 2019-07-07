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
let Buttons = (props) => (
  <>
    <Button text="Good" onclick={props.GoodClickHandler}/>
    <Button text="Neutral" onclick={props.NeutralClickHandler}/>
    <Button text="Bad" onclick={props.BadClickHandler}/>
  </>
)

let Feedback = ({good, neutral, bad}) =>{
  if(good===0 && neutral===0 && bad===0){
    return(
      <div>
        <Header2 />
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <Header2 />
        <p>{"Good"} {good} </p>
        <p>{"Neutral"} {neutral} </p>
        <p>{"Bad"} {bad} </p>
      </div>
    )
  }

}

const MetaStat = ({all, average, positive }) => {
  if(all!==0) {
    return(
      <div>
        <p>{"all"} {all}</p>
        <p>{"average"} {average}</p>
        <p>{"positive"} {positive}{"%"}</p>
      </div>
    )
  }
  else return(<p></p>)

}
const Statistic = ({text, value}) =>(
  <p>{text} {value}</p>
)

const Statistics = (props) => (
<>
    <Statistic text={"good"} value={props.good}/>
    <Statistic text={"neutral"} value={props.neutral}/>
    <Statistic text={"bad"} value={props.bad}/>
    <Statistic text={"all"} value={props.all}/>
    <Statistic text={"average"} value={props.avg}/>
    <Statistic text={"positive"} value={props.goody}/>
</>

)
const App = () => {

  const GoodClickHandler = () => {
    setGood(good + 1);
    //console.log("good: ", good)
    let good2 = good+1;
    const newMeta = {
      ...metastats,
      all: metastats.all + 1, avg: (good2-bad)/(metastats.all+1), goody: 100*good2/(metastats.all+1)
    }
    setMeta(newMeta);
  }

  const NeutralClickHandler = () => {
    setNeutral(neutral + 1);
    const newMeta = {
      ...metastats,
      all: metastats.all + 1, avg: (good-bad)/(metastats.all+1), goody: 100*good/(metastats.all+1)
    }
    setMeta(newMeta);
  }
  const BadClickHandler = () => {
    setBad(bad + 1);
    let bad2 = bad+1;
    const newMeta = {
      ...metastats,
      all: metastats.all + 1, avg: (good-bad2)/(metastats.all+1), goody: 100*good/(metastats.all+1)
    }
    setMeta(newMeta);
  }
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [metastats, setMeta] = useState({all:0, avg:0, goody:0});

  return (
    <div>
      <Header1 />
      <div className="buttons">
        <Buttons GoodClickHandler={GoodClickHandler} BadClickHandler={BadClickHandler}
        NeutralClickHandler={NeutralClickHandler}/>

      </div>
      <Statistics good={good} neutral={neutral} bad={bad}
        all={metastats.all} avg={metastats.avg} goody={metastats.goody}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
