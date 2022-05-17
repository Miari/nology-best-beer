import "./App.scss";
import React, { useState, useEffect } from "react";
import Main from "./containers/Main/Main";

function App() {
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=6"
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Hello!!!</div>
        
        {beers.length && <Main beers={beers} />}
      </header>
    </div>
  );
}

export default App;
