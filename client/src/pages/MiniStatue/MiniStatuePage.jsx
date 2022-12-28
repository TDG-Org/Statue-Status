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

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci, aperiam deserunt ipsam ad voluptatibus. Eos saepe sequi officia possimus aliquam in ipsam corrupti delectus maiores placeat neque, omnis vitae.</p>
              {/* <br />  */}
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci, aperiam deserunt ipsam ad voluptatibus. Eos saepe sequi officia possimus aliquam in ipsam corrupti delectus maiores placeat neque, omnis vitae.</p>
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