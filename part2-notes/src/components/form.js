import React from 'react';

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

export default Form;
