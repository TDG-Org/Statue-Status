import React from "react";

// Styles
import "./MiniStatuePage.scss";

// Components
import {
  GoBackBtn,
  MiniStatueCard,
} from "../../components";

const MiniStatuePage = () => {

  return (
    <div className="MiniStatuePage page">
      <h1 className="fade-title">Mini Statue</h1>

      <hr />

      <GoBackBtn />

      <div className="container">

        <div className="pallet">

          <MiniStatueCard />

        </div>

      </div>

      <hr />

    </div>
  );
};

export default MiniStatuePage;