import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="footer-container">
      <div className="logo">
        <a href="#">Anushka Chauhan</a>
      </div>

      <ul className="links">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Work</a>
        </li>
      </ul>

      <ul className="socials">
        <li>
          <a href="https://www.linkedin.com/in/anushka-chauhan" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/anushkachauhxn" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/anushkachauhan" target="_blank">
            <ion-icon name="logo-behance"></ion-icon>
          </a>
        </li>
        <li>
          <a href="mailto:anushkachauhan1503@gmail.com" target="_blank">
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterComponent;
