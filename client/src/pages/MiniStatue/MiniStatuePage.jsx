import React from "react";

// Styles
import "./MiniStatuePage.scss";

// Link 
import { Link } from "react-router-dom";

// Components
import {
  GoBackBtn,
  MiniStatueCard,
} from "../../components";

let data = {
  name: "Nate",
  company: "TDG",
  intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam corrupti necessitatibus facilis. Quibusdam architecto autem earum ad ex alias provident libero adipisci aut, minima ullam molestias, ratione reprehenderit quam."
};

const MiniStatuePage = () => {

  return (
    <div className="MiniStatuePage page page-full">
      <h1 className="fade-title">Mini Statue</h1>

      <hr />

      <GoBackBtn />

      <div className="container">

        <div className="pallet">

          <MiniStatueCard data={data} />

        </div>

      </div>

      <hr />

    </div>
  );
};

export default MiniStatuePage;