import React, { useState, useEffect } from 'react'
import Form from './components/form.js';
import Filter from './components/filter.js';
import Persons from './components/persons.js';
import utils from './server'

const App = () => {
  const [ persons, setPersons] = useState([]);
  useEffect(() => {
    utils.loadStartData()
         .then(res => setPersons(res.data))
         .catch(err => console.log("ERROR: ", err))
  },[])

  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newPerson  = {name: newName.trim(), number: newNumber.trim()};
    
    let checker = persons.filter((currentObj) => currentObj.name.toLowerCase()===newPerson.name.toLowerCase());
    if (checker.length !== 0) {
      if (!window.confirm(`${checker[0].name} is already added to phonebook, replace old number with the new one?`)) return
      else {
        let modifiedperson = {
          ...newPerson,
          id: checker[0].id
      }
            utils.replaceNumber(modifiedperson)
                  .then(data => {
                    setPersons(persons.map(each => each.id === data.id ? data : each));
                    setNewName('');
                    setNewNumber('');
                  })
              }
    }
    else{

      utils.addPerson(newPerson)
      .then(res => {
        setPersons(persons.concat(res.data));
        setNewName('');
        setNewNumber('');
      })
      .catch(err => console.log('something really bad happened', err));
    }
  }

  const onChangeHandler = (e) => setNewName(e.target.value);
  const onChangeHandler2 = (e) => setNewNumber(e.target.value);

  const onSearchHandler = (e) => {
    let searchString = e.target.value;
    setNewSearch(searchString);
  }

  const showNames = (newSearch, persons) => {
     if(!newSearch) return persons.map(each => <li key={each.name}>{each.name} {each.number} <button onClick={onClickHandler(each)}>delete</button></li>);
     return showSearchMatches(newSearch, persons);
  }

  const onClickHandler = (eachPerson) => () => {
    if (window.confirm(`Delete ${eachPerson.name}?`)){
      utils.deleteContact(eachPerson)
          .then(res => setPersons(persons.filter(each => each.id !== eachPerson.id)))
          .catch(err => console.log("Something bad happened:", err))
    }
  }

  const showSearchMatches = (newSearch, persons) => {
    if (newSearch){
      let toDisplay =  persons.filter((each)=> each.name.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1);

      if (toDisplay[0])
          return toDisplay.map(each => <li key={each.name}>{each.name} {each.number} <button onClick={onClickHandler(each)}>delete</button></li>);
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
