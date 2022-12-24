import React, { useState, useEffect } from "react";

// Styles 
import "./DiscoverPage.scss";

// Images/SVGs 
import { Planet, Male, Pancake, Bravery, Brilliance } from "../../assets/imgs";
import Search from "../../assets/svgs/search.svg";

// Components 
import { Explore } from "../../components";

const DiscoverPage = () => {

  return (
    <div className="DiscoverPage page">

      <h1>Discover</h1>

      <hr />

      <h3>Exploration And Connection</h3>
      <div className="discover-content">
        {/* Discovering Search Section  */}

        <Explore />

        {/* User's Friends  */}
        <div className="discover-user-friends pallet">
          <h4>Friends</h4>

          {/* List of friends  */}
          <ul className="friends-list">

            {/* Friend  */}
            <li className="friend">
              <div className="friend-left">
                <img src={Planet} alt="" className="friend-avatar" />

                <p className="friend-username">Luke</p>
                
                <i className="bi bi-bookmark-fill" title="bookmark"></i>
              </div>
              <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
            </li>

            {/* Friend  */}
            <li className="friend">
              <div className="friend-left">
                <img src={Male} alt="" className="friend-avatar" />
                <p className="friend-username">Jim</p>
              </div>
              <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
            </li>

            {/* Friend  */}
            <li className="friend">
              <div className="friend-left">
                <img src={Pancake} alt="" className="friend-avatar" />
                <p className="friend-username">Pam</p>
              </div>
              <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
            </li>

            {/* Friend  */}
            <li className="friend">
              <div className="friend-left">
                <img src={Bravery} alt="" className="friend-avatar" />
                <p className="friend-username">Dwight</p>
              </div>
              <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default DiscoverPage;