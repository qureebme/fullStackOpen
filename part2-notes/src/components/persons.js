import React from 'react';

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

export default Persons;
