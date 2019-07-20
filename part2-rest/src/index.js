import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = ()=>{

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchresult] = useState([]);
  let matches = [];

  const showMatchingCountries = (searchQuery, searchResult) => {
    matches = searchResult.filter((each) => each.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
    //setMatches(matches);

    if (searchQuery){
      if (matches.length === 1) return
      else if (matches.length > 0 && matches.length < 11) return matches.map((each) => <li key={each.name}>{each.name}</li>);
      else if (matches.length === 0){return "No matching country"}
      else return "Too many matches, specify another filter"
    }
  }

  const showOneCountry = (matches) => {
    if (matches.length === 1){
      let item = matches[0];
      //console.log(item)
      return (
        <>
          <h2>{item.name}</h2>
          <p>Capital {item.capital}</p>
          <p>population {item.population}</p>

          <h3>languages</h3>
          <ul>
            <p>{item.languages.map((each) => <li key={each.name}>{each.name}</li>)}</p>
          </ul>
          <div>
            <img src={item.flag} width="100" alt="country flag"/>
          </div>

        </>
      )
    }
  }
  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  }
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
          .then((res) => {
            setSearchresult(res.data);
          })
          .catch((err) => console.error("errrrr: ", err));
  },[]);
  return(
    <div>
      <div>
        <p>Find countries <input onChange={onChangeHandler} value={searchQuery}/></p>
      </div>

      <div>
        <ul>
          {showMatchingCountries(searchQuery, searchResult)}
        </ul>
      </div>
      <div>
        {showOneCountry(matches)}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
