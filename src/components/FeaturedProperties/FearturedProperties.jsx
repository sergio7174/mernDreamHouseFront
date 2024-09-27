import React from "react";
import "./FeaturedProperties.css";
import { FaBed, FaSquareFull } from "react-icons/fa";
import person from "../../assets/person.jpeg";
import img1 from "../../assets/estate.png";
import img2 from "../../assets/estate2.jpg";
import img3 from "../../assets/estate3.jpg";
import img4 from "../../assets/estate4.jpg";

const FeaturedProperties = () => {
  return (
    <div className="Featured_container">
      <div className="Featured_wrapper">
        <div className="Featured_titles">
          <h5>Properties you may like</h5>
          <h2>Our Featured Properties</h2>
        </div>
        <div className="featuredProperties">
          <div className="featuredProperty">
            <div className="imgContainer">
              <img src={img1} alt="homeimg" />
            </div>
            <div className="details">
              <div className="priceAndOwner">
                <span className="price">$ 990,000</span>
                <img src={person} className="owner" />
              </div>
              <div className="moreDetails">
                <span>
                  4 <FaBed className="icon" />
                </span>
                <span>
                  3500 square feet
                  <FaSquareFull className="icon" />
                </span>
              </div>
              <div className="desc">
                Beautiful renovated home in the heart of the city of Virginia .
              </div>
            </div>
          </div>
          <div className="featuredProperty">
            <div className="imgContainer">
              <img src={img2} alt="" />
            </div>
            <div className="details">
              <div className="priceAndOwner">
                <span className="price">$ 2,290,000</span>
                <img src={person} className="owner" alt="realtor" />
              </div>
              <div className="moreDetails">
                <span>
                  6 <FaBed className="icon" />
                </span>
                <span>
                  2500 square feet <FaSquareFull className="icon" />
                </span>
              </div>
              <div className="desc">
                Newly constructed Home just 40miles from DC
              </div>
            </div>
          </div>
          <div className="featuredProperty">
            <div className="imgContainer">
              <img src={img3} alt="" />
            </div>
            <div className="details">
              <div className="priceAndOwner">
                <span className="price">$ 750,000</span>
                <img src={person} className="owner" alt="realtor" />
              </div>
              <div className="moreDetails">
                <span>
                  3 <FaBed className="icon" />
                </span>
                <span>
                  3000 square feet <FaSquareFull className="icon" />
                </span>
              </div>
              <div className="desc">
                House that is not less than a dream at your favrotie beach
              </div>
            </div>
          </div>
          <div className="featuredProperty">
            <div className="imgContainer">
              <img src={img4} alt="" />
            </div>
            <div className="details">
              <div className="priceAndOwner">
                <span className="price">$ 980,000</span>
                <img src={person} className="owner" alt="realtor" />
              </div>
              <div className="moreDetails">
                <span>
                  5 <FaBed className="icon" />
                </span>
                <span>
                  6000 square feet <FaSquareFull className="icon" />
                </span>
              </div>
              <div className="desc">
                Great house with lots of renovation just for you
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
