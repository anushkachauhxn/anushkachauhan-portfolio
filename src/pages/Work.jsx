import React from "react";
import HeroContainer from "../components/HeroContainer";
import bgImage3 from "../assets/bg3.jpg";

function Work() {
  return (
    <div className="work">
      <HeroContainer page="work" image={bgImage3} title="All Works" />
    </div>
  );
}

export default Work;
