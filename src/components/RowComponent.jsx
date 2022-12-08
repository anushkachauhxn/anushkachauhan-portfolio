import React from "react";
import "./RowComponent.css";

function RowComponent({ image, title, description, link }) {
  return (
    <div className="row-container">
      <div className="img-box">
        <a href={link}>
          <img src={image} alt="" />
        </a>
      </div>

      <div className="text-box">
        <h3 className="heading">{title}</h3>
        <p className="description">{description}</p>
        <a className="cta" href={link}>
          View Page
        </a>
      </div>
    </div>
  );
}

export default RowComponent;
