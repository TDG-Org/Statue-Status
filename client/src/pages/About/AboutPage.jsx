import React from "react";

// Styles
import "./AboutPage.scss";

// images/SVGs 
import Ranking from "../../assets/svgs/ranking.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage page">

      <div className="container">

        {/* intro  */}
        <div className="about-sect about-intro-sect" id="introduction">
          <h1>What is Statue Status?</h1>
          <div className="about-sect-content about-intro-sect-content">
            <p>
            We compile data to show who the richest, most powerful, and most popular people in the world are right now. On the Discover page, users may also view specific notable people or other users who have accounts here.
            </p>
            <img src={Ranking} alt="ranking image" />
            </div>
        </div>

        {/* Getting Started  */}
        <div className="about-sect">
          <h2>Lets Get Started</h2>
          <div className="about-sect-content">
            <p>You can begin browsing in the discover section or you can go to your profile and begin personalizing your look! Additionally, you can make your own Statue from there. But what is it exactly, and how can I use it?</p>
            </div>
        </div>

        {/* What are Statues? */}
        <div className="about-sect">
          <h2>What are Statues?</h2>
          <div className="about-sect-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum necessitatibus dolorum dignissimos aliquid assumenda, cupiditate est exercitationem inventore? Fugit architecto iste ex quos saepe facere quod eius maxime nihil et!</p>
            </div>
        </div>

        </div>
    </div>
  );
};

export default AboutPage;