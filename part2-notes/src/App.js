import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [ newName, setNewName ] = useState('');

  const onSubmitHandler = (e) =>{
    e.preventDefault();

    let newNameList = persons.concat({name: newName});
    let checker = newNameList.filter((currentObj) => currentObj.name.toLowerCase()===newName.toLowerCase());

    if (checker.length !== 1) alert(`${newName} is already added to phonebook`);
    else{
      setPersons(newNameList);
      setNewName('');
    }
  }

  const onChangeHandler = (e) => setNewName(e.target.value);

  const showAllNames = (personsArray) => personsArray.map(each => <li key={each.name}>{each.name}</li>)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmitHandler}>
        <div>
          name: <input value={newName} onChange={onChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {showAllNames(persons)}
      </ul>
    </div>
  )
}

export default App
