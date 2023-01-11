import React from "react";

// Styles
import "../../sass/components/User.scss";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import { Bravery, Brilliance, Pancake, Logo } from "../../assets/imgs";

// Auth 
import Auth from "../../utils/auth";

const User = () => {
  return (
    <div className="user-avatar-section">
      {Auth.loggedIn() ? (
        <>
          {/* Top Section */}
          <div className="user-avatar-sect-top">

            {/* badge section */}
            <ul className="badge-sect">
              <li className="badge">
                  <a href="#">
                    <img src={Brilliance} alt="" />
                </a>
              </li>
              <li className="badge">
                  <a href="#">
                    <img src={Bravery} alt="" />
                </a>
              </li>
            </ul>

            {/* Avatar Section */}
            <Link to="/profile" className="avatar-sect">
              <img src={Pancake} alt="" />   
            </Link>

          </div>

        {/* Bottom Section */}
        <div className="user-avatar-sect-bottom">

          {/* Username */}
          <h3 className="username"><span className="the-at">@</span><a id="username">Nate</a></h3>

          <div className="user-data">
            <div className="user-experience">
              <p>Experience: <span>21894</span></p>
            </div>
            <div className="user-gems">
              <p>Gems: <span>218</span></p>
            </div>
          </div>
          
          {/* User bio section */}
          <p className="user-bio" id="userBio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, dolor dolorem pariatur odit rem?
          </p>

          {/* User's Followers and Following Count */}
          <div className="follow-count-wrapper">
            <p className="following-count"><span id="userFollowersCount">287m</span> Followers</p>
            <p className="following-count"><span id="userFollowingCount">1</span> Following</p>
          </div>

          {/* Links (Future) */}

        </div>
        </>
      ) : (
          <>
            {/* Logo */}
            <div className="not-logged-in-aside-top">
              <div className="statue-status-logo">
                <img
                  src={Logo}
                  alt="Statue Status"
                />
              </div>
              <h4>Statue Status</h4>
            </div>

            {/* Login or Sign Up  */}
            <div className="login-user-or-sign-up">

              {/* Login */}
              <Link
                to="/login"
                className="login-button"
              >
                Login
              </Link>

              {/* Sign Up */}
              <p>
                <Link to="/sign-up">
                  Create an account
                </Link>
              </p>

            </div>

          </>
      )}

      

    </div>
  );
};

export default User;