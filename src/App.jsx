import React, { useEffect, useState } from "react";
import './App.css'
import Home from "./containers/Home/Home";


function App() {

  const [state, setState] = useState({
    s: "",
    resultados: [],
    selected: {}


  })

  return (
    <div className="App-home">
      <main className="main-app">
        <Home />
      </main>

    </div>
  );
}

export default App
