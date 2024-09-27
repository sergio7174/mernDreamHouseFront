import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="foot_col">
          <h2>Find Dream Home</h2>
          <p>Dream Home Project</p>
        </div>
        <div className="foot_col">
          <h2>Contacts</h2>
          <span>Phone: +890 000 000</span>
          <span>LinkedIn: </span>
          <span>GitHub: Pankaja </span>
        </div>
        <div className="foot_col">
          <h2>Location</h2>
          <span>State: Virginia</span>
          <span>City: Fairfax</span>
          <span>Current Location: Reston</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
