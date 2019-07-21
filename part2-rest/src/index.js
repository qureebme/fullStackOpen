import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = ()=>{

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchresult] = useState([]);
  const [country, setCountry] = useState({});
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [wind_dir, setDir] = useState('');
  const [cond, setCond] = useState('');
  let matches;

  const showMatchingCountries = (searchQuery, searchResult) => {
    matches = searchResult.filter((each) => each.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

    if (searchQuery){
      if (matches.length === 1) return showOneCountry(matches);

      else if (matches.length > 0 && matches.length < 11) return matches.map((each) => {
        return <div key={each.name}>{each.name} <button onClick={onClickHandler(each)}>show</button></div>
      });
      else if (matches.length === 0){return "No matching country"}
      else return "Too many matches, specify another filter"
    }
  }

  const onClickHandler = (each) => () => {
    setSearchQuery(each.name);
    setCountry(each);
  }

  const showWeather = (item) => {
    if(item.capital){
      return (
        <div>
          <h3> Weather in {item.capital}</h3>
          <p><b>temperature:</b> {temp} Celcius</p>
          <img src={cond} alt="what it looks like"/>
          <p><b>wind:</b> {wind} kph direction {wind_dir}</p>
        </div>)
    }
  }

  const showOneCountry = (match) => {
      let item = match[0];

      return (
        <div>
          <h2>{item.name}</h2>
          <p>Capital {item.capital}</p>
          <p>population {item.population}</p>

          <h3>languages</h3>
          <ul>
            <p>{item.languages.map((each) => <li key={each.name}>{each.name}</li>)}</p>
          </ul>
          <div>
            <img src={item.flag} width="100" alt={`flag of {item.name}`}/>
          </div>
        </div>
      )
  }
  const onChangeHandler = (e) => {
    if (matches.length === 1) {
      let ctry = matches[0]
      setCountry(ctry);
    }
    else setCountry({});
    return setSearchQuery(e.target.value);
  }

  useEffect(() => {
    if (country.capital){
      let url = 'http://api.apixu.com/v1/current.json?key=72e7a19676014341a81191030192007&q=' + country.capital;
      axios.get(url)
            .then((res) =>{

              setTemp(res.data.current.temp_c); setWind(res.data.current.wind_kph);
              setDir(res.data.current.wind_dir); setCond(res.data.current.condition.icon);
            })
            .catch((err) => console.error("errrrr: ", err));
    }
  },[country]);

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
          {showWeather(country)}
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
