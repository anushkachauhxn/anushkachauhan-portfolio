import React from "react";
import "./RowComponent.scss";

function RowComponent({
  page,
  image,
  subtitle = null,
  title,
  description,
  links = [],
  newTab = false,
}) {
  return (
    <div className="row-container">
      <div className="img-box">
        <a href={links[0]}>
          <img src={image} alt="" />
        </a>
      </div>

      <div className="text-box">
        {subtitle && <p className="subheading cta">{subtitle}</p>}
        <h3 className="heading">{title}</h3>
        <p className="description">{description}</p>

        {page === "home" && (
          <a href={links[0]} className="cta" target={newTab && "_blank"}>
            View Page
          </a>
        )}

        {page === "work" && (
          <div className="links">
            <a href={links[0]} className="cta" target="_blank">
              View Live
            </a>
            <a href={links[1]} className="cta" target="_blank">
              View Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default RowComponent;
