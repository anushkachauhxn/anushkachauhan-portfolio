import React from "react";
import HeroComponent from "../components/HeroComponent";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/profile/iceoranges.jpg";
import image1 from "../assets/profile/tech-skills.png";
import image2 from "../assets/profile/animation.png";
import image3 from "../assets/profile/design.jpg";
import image4 from "../assets/profile/certification.webp";
import image5 from "../assets/profile/hackathon.webp";
import image6 from "../assets/profile/iiitn.png";
import image7 from "../assets/profile/carmel.png";

function Profile() {
  return (
    <div className="profile">
      <HeroComponent page="profile" image={bgImage} title="My Profile" />

      <div className="main-container" id="main">
        <RowComponent
          page="profile"
          image={image1}
          subtitle="My Skills"
          title="Technical Skills"
          description={
            <ul>
              <li>
                I'm a web developer - HTML, CSS, and JavaScript are some of my
                core skills.
              </li>
              <li>
                I've worked with frameworks like React JS, React Native, React
                Admin and Flutter. I've also worked at multiple startups as a
                Frontend Developer using Flutter and React.
              </li>
            </ul>
          }
        />
        <RowComponent
          page="profile"
          image={image2}
          subtitle="My Skills"
          title="Animation Skills"
          description={
            <ul>
              <li>
                My most recent internship included creating animations using
                libraries like GSAP, ScrollMagic and Framer.
              </li>
              <li>I also built 3D animations using Three.js and Cannon.js.</li>
              <li>I have experience with creating CSS Animations as well.</li>
            </ul>
          }
        />
        <RowComponent
          page="profile"
          image={image3}
          subtitle="My Skills"
          title="Design Skills"
          description={
            <ul>
              <li>
                I have a background in UI UX, which gives me a{" "}
                <strong>creative edge</strong>. It gives me a better
                understanding of real-world applications.
              </li>
              <li>
                I have experience in wireframing and prototyping using Figma and
                Adobe XD.
              </li>
            </ul>
          }
        />
        <RowComponent
          page="profile"
          image={image4}
          subtitle="Achievements"
          title="Certifications"
          description={
            <ul>
              Multiple certificates from Hackerrank, Coursera and Forage in:
              <li>React JS</li>
              <li>Bootstrap</li>
              <li>Javascript, CSS and HTML</li>
              <li>Git and GitHub</li>
            </ul>
          }
        />
        <RowComponent
          page="profile"
          image={image5}
          subtitle="Achievements"
          title="Hackathons"
          description={
            <ul>
              Participated in multiple hackathons on design and dev. Won:
              <li>Special Mention at Design 'n' Solve - Devcation 2022</li>
              <li>2nd Runner Up at Designathon 2021</li>
              <li>Winner at Designathon 2020</li>
            </ul>
          }
        />
        <RowComponent
          page="profile"
          image={image6}
          subtitle="Education"
          title="Indian Institute of Information Technology, Nagpur"
          description={
            <ul>
              <li>
                I'm pursuing my B.Tech. degree in Computer Science from IIIT
                Nagpur.
              </li>
              <li>
                I was one of the top students in my year and upgraded my branch
                to CSE.
              </li>
            </ul>
          }
        />
        <RowComponent
          page="profile"
          image={image7}
          subtitle="Education"
          title="Carmel Convent School, Bhopal"
          description={
            <ul>
              <li>I completed my secondary education at Carmel.</li>
              <li>Scored a 10.0 CGPA in Class X and 90.8% in Class XII.</li>
              <li>
                Won several competitions in essay-writing, debate and public
                speaking.
              </li>
            </ul>
          }
        />
      </div>

      <FooterComponent />
    </div>
  );
}

export default Profile;
