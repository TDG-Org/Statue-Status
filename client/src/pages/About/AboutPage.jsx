import React from "react";

// Components 

// Styles
import "./AboutPage.scss";

// Link 
import { Link } from "react-router-dom";

// images/SVGs 
import Ranking from "../../assets/svgs/ranking.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage page">

      <div className="container">

        {/* intro  */}
        <div className="about-sect about-intro-sect" id="introSect">
          <h1>What is Statue Status?</h1>
          <div className="about-sect-content about-intro-sect-content">
            <p>
            We compile data to show who the richest, most powerful, and most popular people in the world are right now. On the <Link to="/discover" className="about-link">Discover</Link> page, users may also view specific notable people or other users who have accounts here.
            </p>
            <img src={Ranking} alt="ranking image" />
            </div>
        </div>

        {/* Getting Started  */}
        <div className="about-sect" id="getStartedSect">
          <h2>Lets Get Started</h2>
          <div className="about-sect-content">
            <p>You can begin browsing in the <Link to="/discover" className="about-link">Discover</Link> section or you can go to your profile and begin personalizing your look! Additionally, you can make your own <a href="#statuesSect" className="about-link">Statue</a> from there. But what is it exactly, and how can I use it?</p>
            </div>
        </div>

        {/* What are Statues? */}
        <div className="about-sect" id="statuesSect">
          <h2>What are Statues?</h2>
          <div className="about-sect-content">
            <p>
            A Statue is a page that is exclusively yours and includes connections to all of your social media accounts, as well as information about you such as your display name, bio, personalization, and the total amount of followers you have across all platforms (if you wish). It will also have a clear background and a full-body photo of you; it can be an illustration, but it must resemble you. You may share your polished web presence with only one link after building and personalizing your Statue.
            </p>
            <br />
            <p>The Statue&apos;s photo will be utilized to display on the <Link to="/" className="about-link">Home</Link> page&apos;s Charts.</p>
            </div>
        </div>

        </div>
    </div>
  );
};

export default AboutPage;