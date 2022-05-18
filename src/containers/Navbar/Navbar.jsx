import "./Navbar.scss";
import React, { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({handleChange, handleInput, searchTerm}) => {

  return (
    <div className="navbar">
      <SearchBox
        label={"beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FiltersList handleChange={handleChange}/>
    </div>
  );
};

export default Navbar;
