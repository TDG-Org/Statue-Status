import React, { useState, useRef, useEffect } from "react";

// Components 
import { ProfileStatueSocialLink } from "./";

// Nate's Social Links data 
import { natesSocialLinks } from "../../../DemoData";

const ProfileStatueSecondary = () => {

  const [displayedSocialLinksCount, setDisplayedSocialLinksCount] = useState(6);
  const [hideMoreSocialLinksBtn, setHideMoreSocialLinksBtn] = useState(false);

  useEffect(() => {
    // Call the toggleShowMoreSocialLinksBtn() function after the displayedSocialLinksCount state has been updated
    toggleShowMoreSocialLinksBtn();
  }, [displayedSocialLinksCount]);
  
  // function to load more projects
  function loadMoreSocialLinks() {
    setDisplayedSocialLinksCount(displayedSocialLinksCount + 6);
  }
  
  function toggleShowMoreSocialLinksBtn() {
    let totalNumberOfSocialLinks = natesSocialLinks.length;
    if (totalNumberOfSocialLinks <= displayedSocialLinksCount) {
      setHideMoreSocialLinksBtn(true);
    } else {
      setHideMoreSocialLinksBtn(false);
    }
  }

  const slSliced = natesSocialLinks.slice(0, displayedSocialLinksCount);
  

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
        break;
      case "socialUsername":
        let username = elValue;
        setStatueSocialLinkCurrent(current => {
          return {
            ...current,
            username,
          };
        });
        break;
    }
  }
  // Update the display 
  function displayStatueSocialLink() {
    document.querySelector(".add-social-link").value = "";
    document.querySelector(".add-social-platform").value = "";
    document.querySelector(".add-social-username").value = "";
  }

  return (
    <div className="secondary-sect">
    {/* Socials  */}
    <div className="secondary-sect-socials">
      <h4>Socials</h4>
        <ul className="social-list">

          {/* Loop through data and create social links  */}
          {slSliced.map((item, index) => {
            return (
              <ProfileStatueSocialLink
              key={index}
              link={item.userSocialLink}
              username={item.userSocialName}
              platform={item.userSocialPlatform}
              />
            );
          })}

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
                type="text"
                name="socialLink"
                ref={statueSocialLinkRef}
                placeholder="https://..."
                className="add-social-link"
                onChange={handleStatueSocialLinkInputChange}
              />
            </div>

            {/* social Platform  */}
            <div className="add-social-platform-sect">
              <span>Platform:</span>
              <input
                type="text"
                name="socialPlatform"
                placeholder="What platform?"
                className="add-social-platform"
                onChange={handleStatueSocialLinkInputChange}
              />
            </div>

            {/* social username  */}
            <div className="add-social-username-sect">
              <span>Username:</span>
              <input
                type="text"
                name="socialUsername"
                className="add-social-username"
                placeholder="What's your username?"
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
          <li
            onClick={loadMoreSocialLinks}
            className={`more-socials-btn ${hideMoreSocialLinksBtn ? "hide" : ""}`}
          >
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