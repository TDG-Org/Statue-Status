import React, { useState } from "react";

// Images/SVGs 

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
  const friendsSliced = myFriends.slice(0, displayedFriendsCount);

  return (
  <div className="discover-user-friends pallet">
     <h4>Friends</h4>

    {/* List of friends  */}
      <ul className="friends-list">
        
        {/* Friend */}
        {friendsSliced.map((item, index) => {
          return (
            <Friend
              key={index}
              avatar={item.friendAvatar}
              name={item.friendName}
              isFav={item.friendIsFav}
            />
          );
        })}

    </ul>
  </div>
  );
};

export default Friends;