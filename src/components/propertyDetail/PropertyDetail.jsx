import React from "react";
import "../propertyDetail/PropertDetail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { request } from "../../uitil/fetchApi";

const PropertyDetail = () => {
  const [propertyDetail, setPropertyDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/find/${id}`, "GET");
        setPropertyDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  console.log(propertyDetail);

  return (
    <div className="details_container">
      <div className="details_wrapper">
        <div className="deatils_left">{/* img here of the property */}</div>
        <div className="details_right">
          <h2 className="details_title"></h2>
          <p className="desc"></p>
          <span className="price"></span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
