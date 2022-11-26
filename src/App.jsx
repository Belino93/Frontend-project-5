import React, { useState } from 'react';
import axios from axios;

import './App.css'
import Search from './components/Search/Search'
import Results from './components/Search/Result'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}

  });


//API ROUTE

const baseUrl = "http://localhost:3005";


//SEARCH REQUEST
  const search = (e) => {
    if (e.key === "Enter") {
      axios(baseUrl + "&s=" + state.s).then(({ data }) => {
    let results = data.Search;

    setState(prevState => {
      return { ...prevState, results: results }
    })
    });
  }
}

// -----------

const handleInput = (e) => {
  let s = e.target.value;

  setState(prevState => {
    return { ...prevState, s: s }
  })
  
}



return (
  <div className="App">
    <main className='App-main'>

      <h1>ABELINO'S MOVIES</h1>
      <Search handleInput={handleInput} search={search} />
    <Results results={state.results} />


    </main>

  </div>
);
}

export default App
