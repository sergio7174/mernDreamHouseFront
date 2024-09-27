import React from "react";
import "./NewsLetter.css";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="News_container">
      <div className="News_wrapper">
        <div className="News_titles">
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className="inputContainer">
          <input type="email" placeholder="Type email..." />
          <FiSend className="sendIcon" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
