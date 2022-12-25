import React from "react";

// Proptypes 
import PropTypes from "prop-types";

const Friend = ({ avatar, name, isFav }) => {

  Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isFav: PropTypes.bool,
  };

  // Function to Check if the Friend is a Favorite 
  function isFriendFav(fav) {
    if (!fav) {
      return "";
    } else return <i className="bi bi-bookmark-fill" title="bookmark"></i>;
  }

  console.log(isFriendFav(isFav));

  return (
    <li className="friend">
      
      {/* Left Side  */}
      <div className="friend-left">
        
        {/* Image  */}
        <img src={avatar} alt="" className="friend-avatar" />

        {/* Name  */}
        <p className="friend-username">{name}</p>
      
        {/* Is Fav?  */}
        {isFriendFav(isFav)}
      </div>
      
      {/* More Info Button  */}
      <button
        className="view-friend"
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>

  </li>
  );
};

export default Friend;