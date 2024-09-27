import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./FindList.css";

const FindList = () => {
  const [type, setType] = useState("beach");
  const [state, setState] = useState("0");
  const [priceRange, setPriceRange] = useState("0");
  const navigate = useNavigate();

  // TODO here or somewhere home(fetching properties)

  const handleSearch = () => {
    // navigating to properties
    navigate(
      `/properties?type=${type}&state=${state}&priceRange=${priceRange}`
    );
  };

  return (
    <div className="Find_container">
      <div className="Find_wrapper">
        <h2>Let us find your dream place right now</h2>
        <h5>Search the best selection of properties </h5>
        <div className="Find_options">
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="singleFamily">SingleFamily</option>
            <option value="villa">Villa</option>
            <option value="townHouse">TownHouse</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select onChange={(e) => setState(e.target.value)}>
            <option disabled>Select State</option>
            <option value="0">Virginia</option>
            <option value="1">Maryland</option>
            <option value="2">Washington DC</option>
          </select>
          <AiOutlineSearch className="Find_searchIcon" onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default FindList;
