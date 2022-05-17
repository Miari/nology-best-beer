import "./Navbar.scss";
import React, { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FiltersList from "../../components/FiltersList/FiltersList";

const Navbar = ({handleChange}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const universalInput = event.target.value.toLowerCase();
    setSearchTerm(universalInput);
  };

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
