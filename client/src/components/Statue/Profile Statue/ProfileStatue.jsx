import React from "react";

// Components 
import { ProfileNoStatue, ProfileStatuePrimary, ProfileStatueSecondary } from "./";

// Styles
import "../../../sass/components/Profile Statue/ProfileStatue.scss";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../../assets/imgs";

// Sweet Alert 
import swal from "sweetalert";

const ProfileStatue = () => {

// Swal Functions 
function handleDeleteStatue() {
  swal({
    text: "deleting...",
    button: false
  });

  setTimeout(() => {
    swal.close();

    deleteStatue();
  }, 1200);
  }
  
  // Delete Statue 
  function deleteStatue() {
    swal({
      icon: "success",
      button: false
    });

    setTimeout(() => {
      swal.close();
    }, 1550);
  }

  return (
     <div className="statue-sect">
     <h3>My Statue</h3>
     <div className="pallet">
        <div className="container">
          
         {/* If No Statue  */}
          <ProfileNoStatue />
          
          <div className="statue">
            {/* Primary Section  */}
            <ProfileStatuePrimary />
            <hr className="smaller-size-screen-display-divider"/>
            {/* - Secondary Section - */}
            <ProfileStatueSecondary />
          </div>

          <hr />
          
          {/* Delete Statue Button  */}
          <div className="delete-statue-btn-wrapper">
            <button
              className="delete-statue-btn"
              onClick={handleDeleteStatue}
            >
              Delete Statue
            </button>
          </div>

       </div>
     </div>
   </div>
  );
};

export default ProfileStatue;