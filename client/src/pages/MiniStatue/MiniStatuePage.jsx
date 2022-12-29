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
              <header className="mini-statue-title">
                <h2>Elon Musk</h2>
                <i className="bi bi-dash"></i>
                <span>United States</span>
              </header>
              

              <p>Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.</p>
              <p>He owns about 25% of Tesla between stock and options, but has pledged more than half his stock as collateral for loans.</p>
              <p>SpaceX, founded in 2002, is worth $127 billion after a funding round in May 2022; it quadrupled its value in three years.</p>
              {/* <br />  */}
              <hr />
              <h4>More About</h4>
              <p>Musk, who says he&apos;s worried about population collapse, has nine children with three women including triplets and two sets of twins.</p>
              <p>As a kid in South Africa, Musk taught himself to code; he sold his first game, Blastar, for about $500.</p>
              <hr />
              <a href="#">See More</a>
            </div>

            <div className="mini-statue-card-showcase">
              <img className="mini-statue-img" src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/thumbnail_elon-musk-twitter-.jpg" alt="" />
              
              <p className="mini-statue-money">$ <span>139867.256</span></p>

              <p>Tesla, SpaceX</p>
              <p>Austin, TX</p>
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