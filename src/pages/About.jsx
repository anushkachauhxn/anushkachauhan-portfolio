import React from "react";
import HeroComponent from "../components/HeroComponent";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/about/chilli.jpg";

function About() {
  return (
    <div className="about">
      <HeroComponent page="about" image={bgImage} title="About me" />

      <div className="main-container" id="main"></div>

      <FooterComponent />
    </div>
  );
}

export default About;
