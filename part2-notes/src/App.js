import React, { useState } from 'react'

const Filter = ({newSearch, onSearchHandler}) => (<p>filter shown with <input value={newSearch} onChange={onSearchHandler}/></p>);
const Form = ({newName, newNumber, onSubmitHandler,onChangeHandler,onChangeHandler2}) =>(
  <form onSubmit={onSubmitHandler}>
    <div>
      name: <input value={newName} onChange={onChangeHandler}/><br/><br/>
      number: <input value={newNumber} onChange={onChangeHandler2}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)
const Persons = ({showAllNames, persons, newSearch, persons2, showSearchMatches}) =>(
  <>
    <ul>
      {showAllNames(newSearch, persons)}
    </ul>
    <ul>
      {showSearchMatches(newSearch, persons2)}
    </ul>
  </>
)

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [persons2, setPersons2] = useState(persons.concat());


  const onSubmitHandler = (e) =>{
    e.preventDefault();

    let newNameList = persons.concat({name: newName.trim(), number: newNumber.trim()});
    let checker = newNameList.filter((currentObj) => currentObj.name.toLowerCase()===newName.toLowerCase());

    if (checker.length !== 1) alert(`${newName} is already added to phonebook`);
    else{
      setPersons(newNameList);
      setPersons2(newNameList);
      setNewName('');
      setNewNumber('');
    }
  }

  const onChangeHandler = (e) => setNewName(e.target.value);
  const onChangeHandler2 = (e) => setNewNumber(e.target.value);

  const onSearchHandler = (e) => {
    let searchString = e.target.value;
    setNewSearch(searchString);
  }

  const showAllNames = (newSearch, personsArray) => {
     if(!newSearch) return personsArray.map(each => <li key={each.name}>{each.name} {each.number}</li>)
  }

  const showSearchMatches = (searchString, persons2) => {
    if (searchString){
      let toDisplay =  persons2.filter((each)=> each.name.indexOf(searchString) !== -1);
      return toDisplay.map(each => <li key={each.name}>{each.name} {each.number}</li>);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} onSearchHandler={onSearchHandler} />
      <h3>Add a new contact</h3>
      <Form newName={newName} newNumber={newNumber} onChangeHandler={onChangeHandler}
          onChangeHandler2={onChangeHandler2} onSubmitHandler={onSubmitHandler}/>
      <h3>Numbers</h3>
      <Persons persons={persons} showAllNames={showAllNames} showSearchMatches={showSearchMatches}
          newSearch={newSearch} persons2={persons2}/>
    </div>
  )
}

export default App
