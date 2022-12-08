import React from "react";
import HeroContainer from "../components/HeroContainer";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/profile/orangesice.jpg";

function Profile() {
  return (
    <div className="profile">
      <HeroContainer page="home" image={bgImage} title="My Profile" />

      <div className="main-container" id="main"></div>

      <FooterComponent />
    </div>
  );
}

export default Profile;
