import React from "react";
import "./RowComponent.css";

function RowComponent({ image, title, description, link }) {
  return (
    <div className="row-container">
      <div class="img-box">
        <a href={link}>
          <img src={image} alt="" />
        </a>
      </div>

      <div class="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>View Page</a>
      </div>
    </div>
  );
}

export default RowComponent;
