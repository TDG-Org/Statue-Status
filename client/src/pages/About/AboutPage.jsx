import React from "react";

// Components 
import { Intro, Starter, Statues } from "../../components";

// Styles
import "./AboutPage.scss";

// Link 
import { Link } from "react-router-dom";

// images/SVGs 
import DevProcess from "../../assets/svgs/development-process.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage page">

      <div className="container">

        {/* Intro Content  */}
        <Intro />

        {/* Getting Started  */}
        <Starter />

        {/* What are Statues? */}
        <Statues />

        </div>
    </div>
  );
};

export default AboutPage;