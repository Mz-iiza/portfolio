import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hi hi I'm</h5>
        <h1>Uju Igweokwu</h1>
        <h5 className="text-light">Software Engineer</h5>
        <h5> Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
        <h3>JUJU-Dev</h3>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
