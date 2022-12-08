import React from "react";
import HeroContainer from "../components/HeroContainer";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/home/orange.jpg";
import image1 from "../assets/home/yellowcar.jpg";
import image2 from "../assets/home/copexpolygon.jpeg";
import image3 from "../assets/home/beachcar.jpg";
import image4 from "../assets/home/artlady.jpg";
import image5 from "../assets/home/boat.jpg";
import cv from "../assets/cv/AnushkaChauhan.pdf";

function Home() {
  return (
    <div className="home">
      <HeroContainer page="home" image={bgImage} title="Anushka Chauhan" />

      <div className="main-container" id="main">
        <RowComponent
          image={image1}
          title="My Best Work"
          description="My best work listed here! Check out all the projects I've worked on. From challenging to tricky. From hair-pulling frustration to smug satisfaction."
          link=""
        />
        <RowComponent
          image={image2}
          title="My Last Internship"
          description="My experience at my most recent internship at Cope Studio, Polygon. Exciting projects, demanding deadlines and overall growth!"
          link=""
        />
        <RowComponent
          image={image3}
          title="My Qualifications"
          description={
            <p>
              Skills I've gained. <br />
              My Education Journey. <br />
              Certifications I've achieved.
            </p>
          }
          link=""
        />
        <RowComponent
          image={image4}
          title="About Me"
          description="Get to know 'Anushka Chauhan' outside of work. Things I'm passionate about. The causes I support. My interests and hobbies."
          link=""
        />
        <RowComponent
          image={image5}
          title="View my CV"
          description="View and download my resume here!"
          link={cv}
        />
      </div>

      <FooterComponent />
    </div>
  );
}

export default Home;
