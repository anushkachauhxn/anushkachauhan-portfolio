import React from "react";
import { data } from "../data/data";
import HeroComponent from "../components/HeroComponent";
import RowComponent from "../components/RowComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/work/bananaslices.jpg";

function Work() {
  return (
    <div className="work">
      <HeroComponent page="work" image={bgImage} title="Best Works" />

      <div className="main-container" id="main">
        {data.best.map((item) => {
          return (
            <RowComponent
              key={item.index}
              page="work"
              image={item.image}
              title={item.title}
              description={item.description}
              links={item.links}
            />
          );
        })}
      </div>

      <FooterComponent />
    </div>
  );
}

export default Work;
