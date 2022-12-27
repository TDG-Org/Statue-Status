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

      <div className="container">

        {/* Intro Section  */}
        <Intro />

        {/* Getting Started Section  */}
        <Starter />

        {/* What are Statues  Section*/}
        <Statues />

      </div>
      
    </div>
  );
};

export default AboutPage;