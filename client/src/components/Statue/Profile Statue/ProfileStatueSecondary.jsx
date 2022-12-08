import React, { useState, useRef } from "react";

const ProfileStatueSecondary = () => {

  const statueSocialLinkRef = useRef(null);

  // Check if Editing is active
  const [editStatueSocialLinkActive, setEditStatueSocialLinkActive] = useState(false);
  
  // Official Social Link 
  const [editStatueSocialLink, setEditStatueSocialLink] = useState("Christian McIlvenny");

  // Current Social link input 
  const [statueSocialLinkCurrent, setStatueSocialLinkCurrent] = useState(editStatueSocialLink);

  // Toggle function to activate Statue SocialLink edit
  function handleToggleStatueSocialLink(e) {
    setEditStatueSocialLinkActive(!editStatueSocialLinkActive);
    setTimeout(() => {
      statueSocialLinkRef.current.focus();
    }, 50);
  } 

  // Update the input text 
  function updateStatueSocialLink(e) {
    setEditStatueSocialLink(statueSocialLinkCurrent);
  }

  // Function that always listens for input changes 
  function handleStatueSocialLinkInputChange(e) {
    const target = e.target;
    let value = target.value;
    setStatueSocialLinkCurrent(value);
  }

  // Update the display 
  function displayStatueSocialLink() {
    document.querySelector(".add-social-link").value = "";
    document.querySelector(".add-social-platform").value = "";
  }

  return (
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
            <i className="bi bi-x-lg statue-social-x"></i>
        </li>
        <li>
          <a
            href=""><i className="bi bi-github"></i> Github/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-facebook"></i> Facebook/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-envelope"></i> Email/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-snapchat"></i> Snapchat/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-twitter"></i> Twitter/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-tiktok"></i> Tiktok/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-youtube"></i> Youtube/
            <span className="social-username">TDGNate</span>
            </a> 
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-linkedin"></i> LinkedIn/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-discord"></i> Discord/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-reddit"></i> Reddit/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-spotify"></i> Spotify/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-steam"></i> Steam/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-stack-overflow"></i>
            Stack overflow/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>
        <li>
          <a
            href=""><i className="bi bi-pinterest"></i>
            Pinterest/
            <span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
        </li>

        {/* Extra Links  */}
        <li>
          <a
            className="social-extra-link"
            href=""><i className="bi bi-link-45deg"></i>
            <span className="social-extra-link-platform">Platform</span>/<span className="social-username">TDGNate</span>
            </a>
            <i className="bi bi-x-lg statue-social-x"></i>
            
          </li>

          {/* add link button  */}
          <li className="add-social-link-btn-wrapper">
            <button
              className={`social-add-link-btn ${editStatueSocialLinkActive ? "hide" : ""}`}
              onClick={handleToggleStatueSocialLink}
            >
              Add Link <i className="bi bi-plus-lg"></i>
            </button>
          </li>
          
          {/* Add a Social Link with platform */}
          <li className="add-social-link-li">
            {/* social link  */}
            <div className="add-social-link-sect">
              <span>Add Link:</span>
              <input
                type="text"
                placeholder="https://..."
                className="add-social-link"
              />
            </div>
            {/* social Platform  */}
            <div className="add-social-platform-sect">
              <span>Platform:</span>
              <input
                type="text"
                placeholder="What platform?"
                className="add-social-platform"
              />
            </div>
            {/* social link add or cancel  */}
            <div className="add-social-btns">
              {/* add  */}
              <button
                className="add-social-btn"
              >Add
              </button>
              {/* cancel  */}
              <button
                className="cancel-social-btn"
              >Cancel
              </button>
            </div>
          </li>

        {/* The More Socials button  */}
        <li className="more-socials-btn">
          <a className=""
            href=""><i className="bi bi-chevron-down"></i>
          </a>
        </li>

      </ul>
    </div>
  </div>
  );
};

export default ProfileStatueSecondary;