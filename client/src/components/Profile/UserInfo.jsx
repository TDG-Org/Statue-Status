import React from "react";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import { Pancake, Brilliance, Bravery } from "../../assets/imgs";

const UserInfo = () => {
  return (
    <div className="other-user-info">

    {/* Badges  */}
    <div className="profile-sect-badges">
      <div className="profile-sect-badge">
        <img src={Bravery} alt="" />
      </div>
      <div className="profile-sect-badge">
        <img src={Brilliance} alt="" />
      </div>
      <div className="profile-sect-badge">
        <img src={Pancake} alt="" />
      </div>
      <div className="profile-sect-badge">
        <img src={Brilliance} alt="" />
      </div>
    </div>

    {/* Reputations  */}
    <div className="profile-sect-reps" id="profileSectReps">
      <h4>Reputations</h4>
      <div className="rep">
        <span>+</span>
        <p id="repCount">1,583</p>
        <i className="bi bi-fire"></i>
      </div>
    </div>

    {/* Reputations  */}
    <div className="profile-sect-statue">
      <h4>Statue</h4>
      <Link>Christian McIlvenny</Link>

      {/* If user does not have a statue  */}
      {/* <p className="no-statue">NA</p>  */}
    </div>
  </div>
  );
};

export default UserInfo;