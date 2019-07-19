import React from 'react';

const Persons = ({showNames, persons, newSearch}) =>(
  <>
    <ul>
      {showNames(newSearch, persons)}
    </ul>

  </>
)

export default Persons;
