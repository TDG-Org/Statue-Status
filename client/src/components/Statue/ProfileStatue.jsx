import React from "react";

// Components 
import ProfileNoStatue from "./ProfileNoStatue";
import ProfileStatueSecondary from "./ProfileStatueSecondary";

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
             {/* Full picture of user  */}
             <img src={NatePfp} alt="" className="statue-img" />
             <h3>Christian McIlvenny</h3>
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