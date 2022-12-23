import React from "react";

// Components 

// Styles
import "./AboutPage.scss";

// Link 
import { Link } from "react-router-dom";

// images/SVGs 
import Ranking from "../../assets/svgs/ranking.svg";
import DevProcess from "../../assets/svgs/development-process.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage page">

      <div className="container">

        {/* intro  */}
        <div className="about-sect about-intro-sect" id="introSect">
          <h1>What is Statue Status?</h1>

          <hr />

          <div className="about-sect-content about-intro-sect-content">
            <p>
            Welcome to Statue Status, the ultimate destination for keeping track of the world&apos;s most influential and successful individuals. With dynamic charts, a discover page, and customizable <a href="#statueSect" className="about-link">Statue</a> page, we offer a variety of features for exploring and showcasing your online presence. Our platform also includes a gamification page where you can earn rewards as you engage with the app. Whether you&apos;re looking to discover new people or create your own professional online presence, Statue Status has something for everyone.
            </p>
            <img src={Ranking} alt="ranking image" />
            </div>
        </div>

        {/* Getting Started  */}
        <div className="about-sect" id="getStartedSect">
          <h2>Lets Get Started</h2>
          <div className="about-sect-content">
            <img src={DevProcess} alt="" />
            <p>To get started on Statue Status, create an account and set up your profile by uploading your avatar and filling out your bio. You can then discover other users on the <Link to="/discover" className="about-link">Discover</Link> page, or visit the <Link to="/" className="about-link">Home</Link> page to see our dynamic charts showcasing the richest and most powerful people, as well as those who are trending. Create your own <a href="#statueSect" className="about-link">Statue</a> to showcase your professional online presence and share it with others using a single link. Don&apos;t forget to visit the gamification page to earn XP and gems as you engage with the app. Enjoy your time on Statue Status!</p>
            </div>
        </div>

        {/* What are Statues? */}
        <div className="about-sect" id="statuesSect">
          <h2>What are Statues?</h2>
          <div className="about-sect-content">
            <p>
            A <a href="#statueSect" className="about-link">Statue</a> on Statue Status is a customizable profile page that is exclusively yours and serves as a professional and organized way to showcase your online presence. It includes links to all of your connected social media accounts, as well as general information about you that you choose to share, such as your display name, bio, and the people connected to you. Additionally, your statue will have a transparent background with a photo of you, which can be an illustration but should resemble you. You have the freedom to choose what information and details you want to include on your statue, and you can access and edit it at any time from your profile page. Once you have created and customized your statue, you can easily share it with others using a single link.
            </p>
            <p>The Statue&apos;s photo will be utilized to display on the <Link to="/" className="about-link">Home</Link> page&apos;s Charts.</p>
            </div>
        </div>

        </div>
    </div>
  );
};

export default AboutPage;