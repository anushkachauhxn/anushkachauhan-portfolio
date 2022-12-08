import React from "react";
import HeroComponent from "../components/HeroComponent";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/profile/iceoranges.jpg";

function Profile() {
  return (
    <div className="profile">
      <HeroComponent page="profile" image={bgImage} title="My Profile" />

      <div className="main-container" id="main"></div>

      <FooterComponent />
    </div>
  );
}

export default Profile;
