import React from "react";
import HeroContainer from "../components/HeroContainer";
import bgImage2 from "../assets/bg2.jpg";

function About() {
  return (
    <div className="about">
      <HeroContainer page="about" image={bgImage2} title="About me" />
    </div>
  );
}

export default About;
