import React, { useEffect, useState } from "react";
import './App.css'
import axios from "axios"
import Home from "./containers/Home/Home";
// import Search from './containers/Search/Search'
// import Resultados from './containers/Search/Resultados'
// import FilmsCards from "./containers/Films/FilmsCards";

function App() {
  const [state, setState] = useState({
    s: "",
    resultados: [],
    selected: {}

  })


  //SEARCH REQUEST
  // const search = (e) => {
  //   if (e.key === "Enter") {
  //     get.axios(baseUrl + "&s=" + state.s).then(({ data }) => {
  //       let resultados = data.Search;

  //       setState(prevState => {
  //         return { ...prevState, resultados: resultados }
  //       })
  //     });
  //   }
  // }

  // -----------

  // const handleInput = (e) => {
  //   let s = e.target.value;

  //   setState(prevState => {
  //     return { ...prevState, s: s }
  //   })

  // }


//CARDS
 
// const [movies, setMovies] = useState([]);
// //const [info, setInfo] = useState({});
// const baseUrl = "https://localhost:3005/movie/";
// const fetchMovies = ( baseUrl) => {
//   axios
//     .get(baseUrl)
  
//     .catch((error) => {
//       console.log(error);
//     });
// };
// useEffect(() => {
//   fetchMovies(baseUrl);
// }, []);



  return (
    <div className="App">
      <main>
        <Home />


        {/* <Search handleInput={handleInput} search={search} />
      <Resultados resultados={state.resultados} /> */}
        {/* <MoviesCards /> 
        <FilmsCards movies={movies} /> */}


      </main>

    </div>
  );
}

export default App
