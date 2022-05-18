import "./App.scss";
import React, { useState, useEffect } from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

function App() {
  const url = "https://api.punkapi.com/v2/beers?per_page=80";
  const [beers, setBeers] = useState([]);
  const [highABV, setHighABV] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [ph, setPh] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const emptyBeer = [{
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Orange_question_mark.svg/2048px-Orange_question_mark.svg.png",
    name: "Oops, there is nothing to show...",
    description: "Really, there is no such beer at all!",
  }];

  useEffect(() => {
    getBeers(highABV, classicRange, ph, searchTerm);
  }, [highABV, classicRange, ph, searchTerm]);

  const getBeers = async (highABV) => {
    let finalUrl = url;
    if (highABV) finalUrl += "&abv_gt=6.0";
    if (classicRange) finalUrl += "&brewed_before=01-2010";
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
    if (value === "Acidic (ph < 4)") checked ? setPh(true) : setPh(false);
  };

  const handleInput = (event) => {
    const universalInput = event.target.value.toLowerCase();
    setSearchTerm(universalInput);
  };

  const filteredBeers = beers
    .filter((beer) => {
      const beerNameLower = beer.name.toLowerCase();
      return beerNameLower.includes(searchTerm);
    })
    .filter((beer) => {
      if (ph) return beer.ph && beer.ph < 4;
      else return beer;
    });

  return (
    <div className="app">
      {
        <Navbar
          handleChange={handleChange}
          handleInput={handleInput}
          searchTerm={searchTerm}
        />
      }

      {filteredBeers.length && <Main beers={filteredBeers} />}
      {!filteredBeers.length && <Main beers={emptyBeer} />}
    </div>
  );
}

export default App;
