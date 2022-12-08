import React from "react";
import HeroComponent from "../components/HeroComponent";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/work/bananaslices.jpg";

function Work() {
  return (
    <div className="work">
      <HeroComponent page="work" image={bgImage} title="My Best Works" />

      <div className="main-container" id="main"></div>

      <FooterComponent />
    </div>
  );
}

export default Work;
