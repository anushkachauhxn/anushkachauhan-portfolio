import React from "react";
import HeroContainer from "../components/HeroContainer";
import RowComponent from "../components/RowComponent";
import "./Home.css";
import bgImage from "../assets/home/orange.jpg";
import image1 from "../assets/home/yellowcar.jpg";
import image2 from "../assets/home/copexpolygon.jpeg";
import image3 from "../assets/home/angrybirds.jpg";
import image4 from "../assets/home/artlady.jpg";
import image5 from "../assets/home/rainbow.jpg";

function Home() {
  return (
    <div className="home">
      <HeroContainer page="home" image={bgImage} title="Anushka" />

      <div className="main-container" id="main">
        <RowComponent
          image={image1}
          title="My Best Work"
          description="All my best projects listed with the skills I used to build them!"
          link=""
        />
        <RowComponent
          image={image2}
          title="My Last Internship"
          description="My experience at my most recent internship at Cope Studio, Polygon. Exciting projects, demanding deadlines and overall growth and learning."
          link=""
        />
        <RowComponent
          image={image3}
          title="My Qualifications"
          description="Education. Skills. Cerifications. Testimonials."
          link=""
        />
        <RowComponent
          image={image4}
          title="About Me"
          description="Get to know 'Anushka Chauhan' outside of work. What makes me passionate? What makes me frustrated? My interests and hobbies. Get to know ME!"
          link=""
        />
        <RowComponent
          image={image5}
          title="View my CV"
          description="View and download my resume here!"
          link=""
        />
      </div>
    </div>
  );
}

export default Home;
