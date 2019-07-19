import React, { useState, useEffect } from 'react'
import Form from './components/form.js';
import Filter from './components/filter.js';
import Persons from './components/persons.js';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
         .then(res => setPersons(res.data))
         .catch(err => console.log("ERROR: ", err))
  },[])

  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let newNameList = persons.concat({name: newName.trim(), number: newNumber.trim()});
    let checker = newNameList.filter((currentObj) => currentObj.name.toLowerCase()===newName.trim().toLowerCase());

    if (checker.length !== 1) alert(`${newName} is already added to phonebook`);
    else{
      setPersons(newNameList);
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

  const showNames = (newSearch, persons) => {
     if(!newSearch) return persons.map(each => <li key={each.name}>{each.name} {each.number}</li>);
     return showSearchMatches(newSearch, persons);
  }

  const showSearchMatches = (newSearch, persons) => {
    if (newSearch){
      let toDisplay =  persons.filter((each)=> each.name.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1);

      if (toDisplay[0])
          return toDisplay.map(each => <li key={each.name}>{each.name} {each.number}</li>);
      else return "No matching contact"
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
      <Persons persons={persons} showNames={showNames} showSearchMatches={showSearchMatches}
          newSearch={newSearch}/>
    </div>
  )
}

export default App
