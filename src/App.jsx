import "./App.scss";
import React, { useState, useEffect } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

function App() {
  const url = "https://api.punkapi.com/v2/beers?per_page=6";
  const [beers, setBeers] = useState([]);
  const [highABV, setHighABV] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [ph, setPh] = useState(false);

  useEffect(() => {
    getBeers(highABV, classicRange, ph);
  }, [highABV, classicRange, ph]);

  const getBeers = async (highABV) => {
    let finalUrl = url;
    if (highABV) finalUrl += "&abv_gt=6.0";
    if (classicRange) finalUrl += "&brewed_before=01-2010";
    if (ph) console.log("ph filter active"); //TODO
    const response = await fetch(finalUrl);
    const data = await response.json();
    setBeers(data);
  };

  const handleChange = (event) => {
    let checked = event.target.checked;
    let value = event.target.value;
    if (value === "High ABV (> 6.0%)") 
    checked ? setHighABV(true) : setHighABV(false);
    if (value === "Classic Range") 
    checked ? setClassicRange(true) : setClassicRange(false);
    if (value === "Acidic (ph < 4)") 
    checked ? setPh(true) : setPh(false);
  }

  return (
    <div className="app">
      {<Navbar handleChange={handleChange} />}
      {beers.length && <Main beers={beers} />}
    </div>
  );
}

export default App;
