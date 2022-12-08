import React from "react";
import { Link } from "react-router-dom";
import "./HeroComponent.css";
import downArrowIcon from "../assets/arrow-down.svg";

function HeroComponent({ page, image, title }) {
  return (
    <div className="hero-container container">
      <div className="bg container">
        <img src={image} alt="" />
      </div>

      <div className="content container">
        <nav>
          <div className="logo">
            <Link to={"/"}>Anushka Chauhan</Link>
          </div>

          <ul className="navbar">
            <li className={page === "about" ? "active" : undefined}>
              <Link to={"/about"}>About</Link>
            </li>
            <li className={page === "work" ? "active" : undefined}>
              <Link to={"/work"}>Work</Link>
            </li>
            <li className={page === "profile" ? "active" : undefined}>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li className="contact-btn">
              <a
                className="cta"
                href="https://www.linkedin.com/in/anushka-chauhan/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <h1 className="title">{title}</h1>
        <a className="icon" href="#main">
          <img src={downArrowIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default HeroComponent;
