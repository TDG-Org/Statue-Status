import React from "react";

// Components 
import { Intro, Starter } from "../../components";

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
        <div className="about-sect" id="statuesSect">
          <h2>What are Statues?</h2>
          <div className="about-sect-content">
            <p>
            A <a href="#statueSect" className="about-link">Statue</a> on Statue Status is a customizable profile page that is exclusively yours and serves as a professional and organized way to showcase your online presence. It includes links to all of your connected social media accounts, as well as general information about you that you choose to share, such as your display name, bio, and the people connected to you. Additionally, your statue will have a transparent background with a photo of you, which can be an illustration but should resemble you. You have the freedom to choose what information and details you want to include on your statue, and you can access and edit it at any time from your profile page. Once you have created and customized your statue, you can easily share it with others using a single link.
            </p>
            <p className="statue-sect-extra">The Statue&apos;s photo will be utilized to display on the <Link to="/" className="about-link">Home</Link> page&apos;s Charts.</p>
            </div>
        </div>

        </div>
    </div>
  );
};

export default AboutPage;