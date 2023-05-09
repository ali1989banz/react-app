import React, { useEffect, useState } from "react";
import axios from "axios";
import "./protfolio.css";

function Protfilio(){
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.protfolio);
    });
  }, []);
  const protfolioImages = images.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.image} alt="" />
        <p className="overlay">
          <span>Show Image</span>
        </p>
      </div>
    );
  });
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

      <div className="box">{protfolioImages}</div>
    </div>
  );
};

export default Protfilio;
