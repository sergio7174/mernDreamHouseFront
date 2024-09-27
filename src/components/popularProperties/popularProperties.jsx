import React from "react";
import { Link } from "react-router-dom";
import "../popularProperties/popuplarProperties.css";
import img1 from "../../assets/realestatebeach.jpg";
import img2 from "../../assets/singlefamily.jpg";
import img3 from "../../assets/villa.png";
import img4 from "../../assets/townhouse (1).png";

const popularProperties = () => {
  return (
    <div className="popular_container">
      <div className="popular_wrapper">
        <div className="popular_titles">
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className="properties">
          <Link
            to={`/properties?type=beach&state=0&priceRange=1`}
            className="property"
          >
            <img src={img1} />
            <div className="quantity">34 properties</div>
            <h5>Beach properties</h5>
          </Link>
          <Link
            to={`/properties?type=singleFamily&state=1&priceRange=1`}
            className="property"
          >
            <img src={img2} />
            <div className="quantity">65 properties</div>
            <h5>SingleFamily properties</h5>
          </Link>
          <Link
            to={`/properties?type=villa&state=2&priceRange=1`}
            className="property"
          >
            <img src={img4} />
            <div className="quantity">72 properties</div>
            <h5>TownHouse properties</h5>
          </Link>
          <Link
            to={`/properties?type=townHouse&state=2&priceRange=1`}
            className="property"
          >
            <img src={img3} />
            <div className="quantity">72 properties</div>
            <h5>Villa properties</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default popularProperties;
