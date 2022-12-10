import React from "react";
import HeroComponent from "../components/HeroComponent";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/about/chilli.jpg";
import image1 from "../assets/about/travelme.jpg";
import image2 from "../assets/about/movies.jpg";
import image3 from "../assets/about/anchoring.jpg";
import image4 from "../assets/about/spotify.jpg";

function About() {
  return (
    <div className="about">
      <HeroComponent page="about" image={bgImage} title="About me" />

      <div className="main-container" id="main">
        <RowComponent
          page="about"
          image={image1}
          title="Travelling"
          description="I love visiting new places! I'm an architecture fan. Not the 'see it and know it' type, but the 'stand and admire it for hours' type. Incidentally, I hate the actual act of &ldquo;travelling&rdquo;. Really looking forward to the future of teleportation!"
        />
        <RowComponent
          page="about"
          image={image2}
          title="TV Shows & Movies"
          description="I love comedy sitcoms. I've watched Brooklyn 99 a ridiculous amount of times! Also, I hate horror movies. So like all good friends, my friends force me to watch them every time we have a movie night."
        />
        <RowComponent
          page="about"
          image={image3}
          title="Public Speaking"
          description="I'm a great public speaker. I've done anchoring at a lot of events for my school and college fests. It's something I actually enjoy - engaging the audience, keeping the event going. But until the moment I'm on stage, I'm cursing myself for signing up."
        />
        <RowComponent
          page="about"
          image={image4}
          title="My Spotify"
          description="My Spotify Wrapped has 55,842 minutes. So, I'm a big music lover! I love old classic songs. My parents listen to them all the time and they remind me of home."
        />
      </div>

      <FooterComponent />
    </div>
  );
}

export default About;
