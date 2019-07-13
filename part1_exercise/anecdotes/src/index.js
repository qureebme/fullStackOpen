import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let anecIndex = 0, //currently displayed,must be init to zero for app to work perfectly.No biggie!
  votes = new Array(anecdotes.length).fill(0);

const App = (props) => {
  const [selected, setSelected] = useState(anecIndex);
  const [max, setMax] = useState(anecIndex);

  let Button = (props) =>(
    <button type="button" onClick={props.handler}>{props.text}</button>
  )

  const voteHandler = () =>{
    votes[anecIndex] += 1;
    setMax( Math.max(...votes)); //max vote value
    console.log(votes);
  }

  const nextHandler = () =>{
    anecIndex = Math.floor(Math.random()*anecdotes.length);
    setSelected(anecIndex);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p><Button handler={nextHandler} text="next anecdote"/><Button handler={voteHandler} text="vote" /></p>

      <div>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[votes.indexOf(max)]}<br/>
      <i>has {max} votes</i>
      </div>

    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
