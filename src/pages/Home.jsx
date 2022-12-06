import React from "react";
import HeroContainer from "../components/HeroContainer";
import "./Home.css";
import bgImage1 from "../assets/bg1.jpg";

function Home() {
  return (
    <div className="home">
      <HeroContainer page="home" image={bgImage1} title="My Best Projects" />
    </div>
  );
}

export default Home;
