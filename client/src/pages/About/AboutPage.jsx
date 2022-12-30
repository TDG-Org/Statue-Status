import React from "react";

// Components 
import {
  Intro,
  Starter,
  Statues
} from "../../components";

// Styles
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="AboutPage page">

      <h1>Statue Status</h1>
      
      <div className="container">
        <hr />
        <p className="about-extra-space"></p>

        {/* Intro Section  */}
        <Intro />

        {/* Getting Started Section */}
        <h3>Lets Get Started</h3>
        <Starter />

        {/* What are Statues  Section */}
        <h3>What are Statues?</h3>
        <Statues />

        <hr />
      </div>
      
    </div>
  );
};

export default AboutPage;