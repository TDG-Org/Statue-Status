import React from "react";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import DevProcess from "../../assets/svgs/development-process.svg";

const Starter = () => {
  return (
    <div className="about-sect" id="getStartedSect">

      <h2>Lets Get Started</h2>

      {/* Content  */}
      <div className="about-sect-content">

        {/* Image  */}
        <img src={DevProcess} alt="Getting Started" />

        <p>To get started on Statue Status, create an account and set up your profile by uploading your avatar and filling out your bio. You can then discover other users on the <Link to="/discover" className="about-link">Discover</Link> page, or visit the <Link to="/" className="about-link">Home</Link> page to see our dynamic charts showcasing the richest and most powerful people, as well as those who are trending. Create your own <a href="#statueSect" className="about-link">Statue</a> to showcase your professional online presence and share it with others using a single link. Don&apos;t forget to visit the gamification page to earn XP and gems as you engage with the app. Enjoy your time on Statue Status!</p>
      </div>
      
   </div>
  );
};

export default Starter;