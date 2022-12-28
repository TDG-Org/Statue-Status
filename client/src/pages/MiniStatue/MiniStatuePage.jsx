import React from "react";

// Styles
import "./MiniStatuePage.scss";

// Components
import { GoBackBtn } from "../../components";

const MiniStatuePage = () => {

  return (
    <div className="MiniStatuePage page">
      <h1 className="fade-title">Mini Statue</h1>

      <hr />
      <GoBackBtn />

      <div className="container">

        <div className="pallet">

          <div className="mini-statue-card">
            <div className="mini-statue-card-content">
              <h2>Elon Musk</h2>

              <p>Musk, who says he&apos;s worried about population collapse, has nine children with three women including triplets and two sets of twins.</p>
              <p>As a kid in South Africa, Musk taught himself to code; he sold his first game, Blastar, for about $500.</p>
              {/* <br />  */}
              <hr />
              <h4>Info</h4>
              <p>Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.</p>
            </div>

            <div className="mini-statue-card-showcase">
              <img className="mini-statue-img" src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/thumbnail_elon-musk-twitter-.jpg" alt="" />


            </div>

          </div>

        </div>

        <div className="hello"></div>

      </div>

      <hr />

    </div>
  );
};

export default MiniStatuePage;