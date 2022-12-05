import React from "react";

// Styles
import "./ProfilePage.scss";

// Link 
import { Link } from "react-router-dom";

// Images/SVGs 
import { Pancake, Brilliance, Bravery, NatePfp } from "../../assets/imgs/";

const ProfilePage = () => {
  return (
    <div className="ProfilePage page">

      <h1>My Profile</h1>
      
      <hr />

      {/* Profile Section  */}
      <div className="profile-sect">
        <h3>Edit Profile</h3>

        <div className="pallet">

          <div className="container">

            {/* User can edit  */}
            <div className="user-edit">

              {/* Avatar  */}
              <div className="profile-sect-avatar">
                <div className="profile-sect-avatar-content">
                  <img src={Pancake} alt="" />
                  <div className="avatar-edit-overlay">Edit</div>
                </div>
                <button className="change-avatar">Change Avatar</button>
              </div>

              {/* Right Side  */}
              <div className="text-edit-side">

                {/* Username  */}
                <div className="profile-sect-name">
                  <h4 id="profileUsername">TDGNate</h4>
                </div>

                {/* Bio  */}
                <div className="profile-sect-bio">
                  <h4 id="bioTitle">Bio</h4>
                  <textarea type="text" className="bio-input" value="This is some test values" disabled></textarea>
                  <button className="edit-bio-btn"><i className="bi bi-pen"></i></button>
                </div>
              </div>
            </div>

            <div className="profile-sect-divider"></div>

            {/* User info  */}
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

          </div>
        </div>

      </div>

      {/* Statue Section  */}
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
                        href=""><i className="bi bi-envelope"></i> email/
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

    </div>
  );
};

export default ProfilePage;