import React, { useState } from "react";

// Components 
import ProfileNoStatue from "./ProfileNoStatue";
import ProfileStatueSecondary from "./ProfileStatueSecondary";
import ProfileStatueAccessory from "./ProfileStatueAccessory";
import ProfileStatueBages from "./ProfileStatueBages";

// Styles
import "../../sass/components/ProfileStatue.scss";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../assets/imgs";

const ProfileStatue = () => {
  
  return (
     <div className="statue-sect">
     <h3>My Statue</h3>
     <div className="pallet">
       <div className="container">

         {/* if user does not have a statute  */}
         <ProfileNoStatue />
          
         {/* if the user has a statue  */}
         <div className="statue">
            <div className="primary-sect">
              
             {/* Picture */}
              <img src={NatePfp} alt="" className="statue-img" />
              
             {/* Statue Name */}
              <div className="statue-name-sect">
                <input type="text" className="statue-name" value="Christian McIlvenny" disabled />
                <button className="statue-name-edit">
                   <i className="bi bi-pen"></i>
                </button>
              </div>

              <hr />
              
              {/* About Statue Section  */}
              <div className="statue-about-sect">
                <p className="statue-sect-label">Who Am I?</p>
                <textarea className="statue-about" disabled>
                  You can just call me Nate! My passion is building applications for clients, team collaboration, problem-solving, and designing.
                </textarea>
                <button className="statue-about-edit">
                  <i className="bi bi-pen"></i>
                </button>
              </div>

              <hr />

              {/* Accessory Section  */}
              <ProfileStatueAccessory />
              
              {/* Badge Section  */}
              <ProfileStatueBages /> 

            </div> 
            
            {/* Secondary Section  */}
            <ProfileStatueSecondary />
         </div>

       </div>
     </div>
   </div>
  );
};

export default ProfileStatue;