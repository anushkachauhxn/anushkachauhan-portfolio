import React from "react";
import { Link } from "react-router-dom";
import "./HeroContainer.css";
import bgImage1 from "../assets/bg1.jpg";
import bgImage2 from "../assets/bg2.jpg";
import bgImage3 from "../assets/bg3.jpg";
import downArrowIcon from "../assets/arrow-down.svg";

function HeroContainer({ page }) {
  return (
    <div className="hero-container container">
      <div className="bg container">
        <img
          src={
            (page === "home" && bgImage1) ||
            (page === "about" && bgImage3) ||
            (page === "work" && bgImage2)
          }
          alt=""
        />
      </div>

      <div className="content container">
        <nav>
          <div class="logo">
            <Link to={"/"}>Anushka Chauhan</Link>
          </div>
          <ul class="navbar">
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"services"}>Services</Link>
            </li>
            <li>
              <Link to={"work"}>Work</Link>
            </li>
            <li class="contact-btn">
              <a
                href="https://www.linkedin.com/in/anushka-chauhan/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          {(page === "home" && "My Best Projects") ||
            (page === "about" && "About Me") ||
            (page === "work" && "All Projects")}
        </h1>
        <a class="icon" href="#main">
          <img src={downArrowIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default HeroContainer;
