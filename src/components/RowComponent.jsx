import React from "react";
import { Link } from "react-router-dom";
import "./RowComponent.css";

function RowComponent({ page, image, title, description, link }) {
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
        {page === "home" && (
          <Link className="cta" to={link}>
            View Page
          </Link>
        )}
      </div>
    </div>
  );
}

export default RowComponent;
