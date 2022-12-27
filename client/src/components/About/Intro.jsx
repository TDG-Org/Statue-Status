import React from "react";

// images/SVGs 
import Ranking from "../../assets/svgs/ranking.svg";

const Intro = () => {
  return (
    <div className="about-sect about-intro-sect" id="introSect">
      <h1>What is Statue Status?</h1>

      <hr />

      <div className="about-sect-content about-intro-sect-content">

        {/* Content  */}
        <p>
        Welcome to Statue Status, the ultimate destination for keeping track of the world&apos;s most influential and successful individuals. With dynamic charts, a discover page, and customizable <a href="#statueSect" className="about-link">Statue</a> page, we offer a variety of features for exploring and showcasing your online presence. Our platform also includes a gamification page where you can earn rewards as you engage with the app. Whether you&apos;re looking to discover new people or create your own professional online presence, Statue Status has something for everyone.
        </p>

        {/* Image  */}
        <img src={Ranking} alt="ranking image" />
        
      </div>
   </div>
  );
};

export default Intro;