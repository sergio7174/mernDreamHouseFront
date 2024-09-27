import React from "react";
import { FaBed, FaSquareFull } from "react-icons/fa";
import person from "../../assets/person.jpeg";
import img1 from "../../assets/estate.png";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { properties } from "../../uitil/Data";
import { arrPriceRanges } from "../../uitil/PriceRange";
import "../Properties/Properties.css";
import { useEffect } from "react";
import { stateToIdx } from "../../uitil/States";

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [state, setState] = useState(null);
  const query = useLocation().search.slice(1); // slice(1) to remove "?"
  const arrQuery = query.split("&");
  const navigate = useNavigate();

  // parsing query params
  useEffect(() => {
    if (arrQuery && state === null) {
      let formattedQuery = {};
      arrQuery.forEach((option, idx) => {
        const key = option.split("=")[0];
        const value = option.split("=")[1];

        formattedQuery = { ...formattedQuery, [key]: value };

        // if we are on the last index, assign the formattedQuery obj to state
        if (idx === arrQuery.length - 1) {
          setState((prev) => formattedQuery);
          handleSearch(formattedQuery);
        }
      });
    }
  }, [arrQuery]);

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSearch = (param = state) => {
    let options;
    // we either pass the formattedObj or event, that's why we do the IF/ELSE
    if (param?.nativeEvent) {
      options = state;
    } else {
      options = param;
    }
    const filteredProperties = properties.filter((property) => {
      const priceRange = arrPriceRanges[options.priceRange];
      const minPrice = Number(priceRange.split("-")[0]);
      const maxPrice = Number(priceRange.split("-")[1]);
      const state = stateToIdx(property.state);

      if (
        property.type === options.type &&
        state === Number(options.state) &&
        property.price >= minPrice &&
        property.price <= maxPrice
      ) {
        return property;
      }
    });

    const queryStr = `type=${options.type}&state=${options.state}&priceRange=${options.priceRange}`;

    navigate(`/properties?${queryStr}`, { replace: true });
    setFilteredProperties((prev) => filteredProperties);
  };

  return (
    <div className="Properties_container">
      <div className="Properties_wrapper">
        <div className="options">
          <select value={state?.type} name="type" onChange={handleState}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="singleFamiliy">singleFamily</option>
            <option value="villa">Villa</option>
            <option value="townHouse">TownHouse</option>
          </select>
          <select
            value={state?.priceRange}
            name="priceRange"
            onChange={handleState}
          >
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option>
          </select>
          <select value={state?.state} name="" onChange={handleState}>
            <option disabled>Select State</option>
            <option value="0">Virginia</option>
            <option value="1">Maryland</option>
            <option value="2">Washington DC</option>
          </select>
          <button className="searchBtn">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
          </button>
        </div>
        {filteredProperties?.length > 0 ? (
          <>
            <div className="Properties_titles">
              <h5>Selected properties</h5>
              <h2>Property you may like</h2>
            </div>
            <div className="properties">
              {filteredProperties.map((property) => (
                <div key={property.id} className="property">
                  <Link
                    to={`/propertyDetail/${property._id}`}
                    className="imgContainer"
                  >
                    <img src={img1} alt="" />
                  </Link>
                  <div className="details">
                    <div className="priceAndOwner">
                      <span className="price">$ {property.price}</span>
                      <img src={person} className="owner" />
                    </div>
                    <div className="moreDetails">
                      <span>
                        {property.beds} <FaBed className="icon" />
                      </span>
                      <span>
                        {property.sqfeet} square feet
                        <FaSquareFull className="icon" />
                      </span>
                    </div>
                    <div className="desc">{property.decs}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2 className="noProperty">
            We have no properties with the specified options.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Properties;
