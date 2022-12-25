import React, { useState, useEffect } from "react";

// Images/SVGs 
import { Planet, Male, Pancake, Bravery } from "../../assets/imgs";

// Components
import { Friend } from "./";

// Demo Data 
import { myFriends } from "../../DemoData";

const Friends = () => {

  // Slice / Show More button

  const [displayedFriendsCount, setDisplayedFriendsCount] = useState(10);

  // function to load more Friends Links
  function loadMoreFriends() {
    setDisplayedFriendsCount(displayedFriendsCount + 30);
  }

  // Checks if the limit has been reached to hide show more links button 
  function toggleShowMoreFriendsBtn() {
    let totalNumberOfFriends = myFriends.length;
    if (totalNumberOfFriends <= displayedFriendsCount) {
      setHideMoreFriendsBtn(true);
    } else {
      setHideMoreFriendsBtn(false);
    }
  }

  // The Social Links that are going to show 
  const friendsSliced = Friends.slice(0, displayedFriendsCount);

  return (
  <div className="discover-user-friends pallet">
     <h4>Friends</h4>

    {/* List of friends  */}
      <ul className="friends-list">
        
      {/* Friend  */}
      {exploreResultsSliced.map((item, index) => {
          return (
            <Friend
              key={index}
              avatar={item.resultAvatar}
              name={item.resultName}
              statue={item.resultStatue}
              reps={item.resultsReps}
            />
         );
        })}

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Planet} alt="" className="friend-avatar" />

          <p className="friend-username">Luke</p>
          
          <i className="bi bi-bookmark-fill" title="bookmark"></i>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Male} alt="" className="friend-avatar" />
          <p className="friend-username">Jim</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Pancake} alt="" className="friend-avatar" />
            <p className="friend-username">Pam</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

      {/* Friend  */}
      <li className="friend">
        <div className="friend-left">
          <img src={Bravery} alt="" className="friend-avatar" />
          <p className="friend-username">Dwight</p>
        </div>
        <button className="view-friend"><i className="bi bi-three-dots-vertical"></i></button>
      </li>

    </ul>
  </div>
  );
};

export default Friends;