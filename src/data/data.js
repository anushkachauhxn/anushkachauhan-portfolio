import React from "react";
import image1 from "../assets/work/1-rock-paper-scissors.jpg";
import image2 from "../assets/work/2-sneakers-product-page.jpg";
import image3 from "../assets/work/3-peppasauce.jpg";
import image4 from "../assets/work/4-spotify-web.jpg";
import image5 from "../assets/work/5-ip-address-tracker.jpg";

export const data = {
  best: [
    {
      index: 1,
      image: image1,
      title: "Rock Paper Scissors Lizard Spock",
      description:
        "Big Bang Theory's famous 'rock paper scissors lizard spock' game built using ReactJS, Redux and Material UI.",
      links: [
        "https://anushkachauhxn.github.io/fm-rock-paper-scissors-lizard-spock/",
        "https://github.com/anushkachauhxn/fm-rock-paper-scissors-lizard-spock",
      ],
    },
    {
      index: 2,
      image: image2,
      title: "Sneakers Product Page",
      description:
        "The product page for a sneakers product with cart functionality and lightbox view. Built completely using Javascript without the help of any libraries.",
      links: [
        "https://anushkachauhxn.github.io/frontend-mentor-projects/projects/14-ecommerce-product-page/",
        "https://github.com/anushkachauhxn/frontend-mentor-projects/tree/main/projects/14-ecommerce-product-page",
      ],
    },
    {
      index: 3,
      image: image3,
      title: "Peppasauce Website Clone",
      description:
        "A clone of the original peppasauce.love website with all the lovely animations. Responsive design. Animations: GSAP and ScrollMagic libraries.",
      links: [
        "https://peppasauce.netlify.app/",
        "https://github.com/anushkachauhxn/my-peppesauce-love",
      ],
    },
    {
      index: 4,
      image: image4,
      title: "Spotify Web Clone",
      description:
        "Spotify web clone. My own take on the mobile version of spotify web! Completely responsive at all device sizes.",
      links: [
        "https://spotify-clone-anushkachauhxn.netlify.app/",
        "https://github.com/anushkachauhxn/spotify-clone-react",
      ],
    },
    {
      index: 5,
      image: image5,
      title: "IP Address Tracker",
      description:
        "An application that tracks the physical address from an IP Address. Built using the IP Geolocation API and LeafletJS (a library for interactive maps).",
      links: [
        "https://anushkachauhxn.github.io/frontend-mentor-projects/projects/8-ip-address-tracker/",
        "https://github.com/anushkachauhxn/frontend-mentor-projects/tree/main/projects/8-ip-address-tracker",
      ],
    },
  ],
  all: [
    {
      index: 0,
      title: "",
      description: "",
      links: [],
    },
  ],
};
