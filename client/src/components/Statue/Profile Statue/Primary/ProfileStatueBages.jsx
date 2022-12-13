import React from "react";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../../../assets/imgs";

const ProfileStatueBages = () => {
  return (
  <div className="badges-sect">
    <div className="statue-badge">
    <img src={Bravery} alt="" />
    </div>
    <div className="statue-badge">
    <img src={Brilliance} alt="" />
    </div>
    <div className="statue-badge">
    <img src={Pancake} alt="" />
    </div>
  </div>
  );
};

export default ProfileStatueBages;