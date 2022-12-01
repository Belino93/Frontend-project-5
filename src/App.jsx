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
    <div className="App">
      <main>
        <Home />
      </main>

    </div>
  );
}

export default App
