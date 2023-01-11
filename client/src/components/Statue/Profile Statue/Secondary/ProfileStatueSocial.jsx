import React, { useState, useRef, useEffect } from "react";

// Components 
import { ProfileStatueSocialLink } from "./";

// Nate's Social Links data 
import { natesSocialLinks } from "../../../../DemoData.js";

// Sweet Alert 
import swal from "sweetalert";

const ProfileStatueSocial = () => {

  const statueSocialLinkRef = useRef(null);

  // Check if Editing is active
  const [editStatueSocialLinkActive, setEditStatueSocialLinkActive] = useState(false);

  // Official Social Link 
  const [editStatueSocialLink, setEditStatueSocialLink] = useState([]);

  // Current Social link input 
  const [statueSocialLinkCurrent, setStatueSocialLinkCurrent] = useState(editStatueSocialLink);

  // Toggle function to activate Statue Social Link edit
  function handleToggleStatueSocialLink(e) {
    setEditStatueSocialLinkActive(!editStatueSocialLinkActive);
    setTimeout(() => {
      statueSocialLinkRef.current.focus();
    }, 50);
  } 

  // Update the display / Removes values for the inputs
  function displayStatueSocialLink() {
    document.querySelector(".add-social-link").value = "";
    document.querySelector(".add-social-platform").value = "";
    document.querySelector(".add-social-username").value = "";
  }

  // Function to check passed in URLs are valid
  function checkInputURL(url) {
    let regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?([\w\.-]*)=([\w\.-]*))?(#([\w\.-]*))?$/;
    return regex.test(url);
};
  
  // Update the input text, but checks the inputs before moving forward
  function updateStatueSocialLink(e) {

    // get the input values 
    let socialLinkInput = document.querySelector(".add-social-link").value;
    let socialPlatformInput = document.querySelector(".add-social-platform").value;
    let socialUsernameInput = document.querySelector(".add-social-username").value;

    // check if the input values are empty 
    if (socialLinkInput == "" || socialPlatformInput == "" || socialUsernameInput == "") {

      // Send Swal message 
      swal({
        text: "Please fill in all input fields",
        button: false
      });
  
      setTimeout(() => {
        swal.close();
      }, 1150);

      return;
    }

    const checkInputURLValue = checkInputURL(socialLinkInput);

    // check if the URL is valid 
    if (!checkInputURLValue) {

      // Send Swal message 
      swal({
        text: "URL Invalid, please check the link",
        button: false
      });
  
      setTimeout(() => {
        swal.close();
      }, 1150);

      return;
    }

    loadMoreSocialLinks();
    updateStatueSocialLinkOfficial();
    handleToggleStatueSocialLink(); 
  }

  // After the check above, this will create object and set the state 
  function updateStatueSocialLinkOfficial() {
    let newStatueLinkObj = {
      userSocialLink: statueSocialLinkCurrent.link,
      userSocialPlatform: statueSocialLinkCurrent.platform,
      userSocialName: statueSocialLinkCurrent.username
    };
    setEditStatueSocialLink([...editStatueSocialLink, newStatueLinkObj]);
    displayStatueSocialLink();
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

  // Displaying a number of links state 
  const [displayedSocialLinksCount, setDisplayedSocialLinksCount] = useState(4);

  // Hide button if number is above set limit 
  const [hideMoreSocialLinksBtn, setHideMoreSocialLinksBtn] = useState(false);

  // Once component is rendered Call the toggleShowMoreSocialLinksBtn()
  useEffect(() => {
    toggleShowMoreSocialLinksBtn();
  }, [displayedSocialLinksCount]);
  
  // function to load more Social Links
  function loadMoreSocialLinks() {
    setDisplayedSocialLinksCount(displayedSocialLinksCount + 4);
  }

  // function to load less Social Links
  function loadLessSocialLinks() {
    setDisplayedSocialLinksCount(displayedSocialLinksCount - (displayedSocialLinksCount  - 4));
  }
  
  // Checks if the limit has been reached to hide show more links button 
  function toggleShowMoreSocialLinksBtn() {
    let totalNumberOfSocialLinks = editStatueSocialLink.length;
    if (totalNumberOfSocialLinks <= displayedSocialLinksCount) {
      setHideMoreSocialLinksBtn(true);
    } else {
      setHideMoreSocialLinksBtn(false);
    }
  }

  // The Social Links that are going to show 
  const slSliced = editStatueSocialLink.slice(0, displayedSocialLinksCount);

  // On Render, this tracks the social links 
  useEffect(() => {
    // console.log(editStatueSocialLink); 
  }, [editStatueSocialLink]);

  // Function to remove an element from the editStatueSocialLink state variable
  function handleRemoveSocialLink(username) {
    // Update the currentSocialLinks state variable to exclude the element that was removed
    setEditStatueSocialLink(editStatueSocialLink.filter(item => item.userSocialName !== username));
  };

  return (
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
              onRemoveSocialLink={handleRemoveSocialLink}
              />
            );
          })}

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
                required
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
                required
                type="text"
                maxLength="35"
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
                required
                type="text"
                maxLength="35"
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
            <a
              className=""
              ><i className="bi bi-chevron-down"></i>
          </a>
        </li>

        {/* The show less Socials button  */}
          <li
            onClick={loadLessSocialLinks}
            className={`more-socials-btn ${hideMoreSocialLinksBtn ? "" : "hide"}`}
          >
            <a
              className=""
              ><i className="bi bi-chevron-compact-up"></i>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default ProfileStatueSocial;