import React from "react";
import "./PropertyCard.css";
import { FaBed, FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";
import person from "../../assets/person.jpg";

const PropertyCard = ({ property }) => {
  const ownerProfileImg = property?.currentOwner?.profileImg;

  return (
    <div key={property._id} className="property">
      <Link to={`/propertyDetail/${property._id}`} className="imgContainer">
        <img src={`http://localhost:5000/images/${property?.img}`} alt="" />
      </Link>
      <div className="details">
        <div className="priceAndOwner">
          <span className="price">$ {property.price}</span>
          <img
            src={
              ownerProfileImg
                ? `http://localhost:5000/images/${ownerProfileImg}`
                : person
            }
            className="owner"}
          />
        </div>
        <div className="moreDetails">
          <span>
            {property.beds} <FaBed className="icon" />
          </span>
          <span>
            {property.sqmeters} square meters
            <FaSquareFull className="icon" />
          </span>
        </div>
        <div className="desc">{property.desc}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
