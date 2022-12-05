import React from "react";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../assets/imgs";

const ProfileStatue = () => {
  return (
     <div className="statue-sect">
     <h3>My Statue</h3>

     <div className="pallet">

       <div className="container">

         {/* if user does not have a statute  */}
         <div className="no-statue">
           <h4>It appears that you don&apos;t have a statue yet!</h4>
           <p>Let&apos;s create one</p>
           <br />
           <p>Click <Link to="/about#statuesSect">here</Link> to learn more about statues if you&apos;re unfamiliar.</p>
           <button className="create-statue-btn">Create Statue</button>
         </div>

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
           <div className="secondary-sect">
             {/* Socials  */}
             <div className="secondary-sect-socials">
               <h4>Socials</h4>
               <ul className="social-list">

                 <li>
                   <a
                     href=""><i className="bi bi-instagram"></i> Instagram/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-github"></i> Github/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-facebook"></i> Facebook/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-envelope"></i> Email/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-snapchat"></i> Snapchat/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-twitter"></i> Twitter/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-tiktok"></i> Tiktok/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-youtube"></i> Youtube/
                     <span className="social-username">TDGNate</span>
                   </a> 
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-linkedin"></i> LinkedIn/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-discord"></i> Discord/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-reddit"></i> Reddit/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-spotify"></i> Spotify/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-steam"></i> Steam/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-stack-overflow"></i>
                     Stack overflow/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>
                 <li>
                   <a
                     href=""><i className="bi bi-pinterest"></i>
                     Pinterest/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>

                 {/* Extra Links  */}
                 <li>
                   <a
                     className="social-extra-link"
                     href=""><i className="bi bi-link-45deg"></i>
                     <span className="social-extra-link-platform">Platform</span>/
                     <span className="social-username">TDGNate</span>
                   </a>
                 </li>

                 {/* The More Socials button  */}
                 <li>
                   <a className="more-socials-btn"
                     href=""><i className="bi bi-chevron-down"></i>
                   </a>
                 </li>

               </ul>
             </div>
           </div>
         </div>

       </div>

     </div>

   </div>
  );
};

export default ProfileStatue;