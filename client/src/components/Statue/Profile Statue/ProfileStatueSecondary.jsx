import React, { useState, useRef } from "react";

// social links array
import { socialLinksArray } from "./";

const ProfileStatueSecondary = () => {
  // console.log(socialLinksArray[0].icon); 

  const statueSocialLinkRef = useRef(null);

  // Check if Editing is active
  const [editStatueSocialLinkActive, setEditStatueSocialLinkActive] = useState(false);
  
  // Official Social Link 
  const [editStatueSocialLink, setEditStatueSocialLink] = useState(null);

  // Current Social link input 
  const [statueSocialLinkCurrent, setStatueSocialLinkCurrent] = useState(editStatueSocialLink);

  // Toggle function to activate Statue Social Link edit
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

    // Get name of Element and the user input 
    const elName = e.target.name;
    let elValue = e.target.value;

    // check which key value that matches to update 
    switch (elName) {
      case "socialLink":
        let link = elValue;
        setStatueSocialLinkCurrent(current => {
          return {
            ...current,
            link,
          };
        });
        break;
      case "socialPlatform":
        let platform = elValue;
        setStatueSocialLinkCurrent(current => {
          return {
            ...current,
            platform,
          };
        });
    }
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
            href=""><i className={socialLinksArray[0].iconClass}></i> Instagram/
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
          <li className={`add-social-link-btn-wrapper ${editStatueSocialLinkActive ? "hide" : ""}`}>
            <button
              className="social-add-link-btn"
              onClick={handleToggleStatueSocialLink}
            >
              Add Link <i className="bi bi-plus-lg"></i>
            </button>
          </li>
          
          {/* Add a Social Link with platform */}
          <li className={`add-social-link-li ${editStatueSocialLinkActive ? "" : "hide"}`}>
            {/* social link  */}
            <div className="add-social-link-sect">
              <span>Add Link:</span>
              <input
                name="socialLink"
                ref={statueSocialLinkRef}
                type="text"
                placeholder="https://..."
                className="add-social-link"
                onChange={handleStatueSocialLinkInputChange}
              />
            </div>
            {/* social Platform  */}
            <div className="add-social-platform-sect">
              <span>Platform:</span>
              <input
                name="socialPlatform"
                type="text"
                placeholder="What platform?"
                className="add-social-platform"
                onChange={handleStatueSocialLinkInputChange}
              />
            </div>
            {/* social link add or cancel  */}
            <div className="add-social-btns">
              {/* add  */}
              <button
                className="add-social-btn"
                onClick={(e) => {
                  updateStatueSocialLink();
                  handleToggleStatueSocialLink(); 
                  displayStatueSocialLink();
                }}
              >Add
              </button>
              {/* cancel  */}
              <button
                className="cancel-social-btn"
                onClick={() => {
                  handleToggleStatueSocialLink();
                  displayStatueSocialLink();
                  }
                }
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
      
      {/* Connections  */}

      <div className="connections"></div>
  </div>
  );
};

export default ProfileStatueSecondary;