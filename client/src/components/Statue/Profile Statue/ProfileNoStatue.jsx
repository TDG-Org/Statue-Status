import React from "react";

// Link 
import { Link } from "react-router-dom";

const ProfileNoStatue = () => {
  return (
    <div className="no-statue">
    <h4>It appears that you don&apos;t have a statue yet!</h4>
    <p>Let&apos;s create one</p>
    <br />
    <p>Click <Link to="/about#statuesSect">here</Link> to learn more about statues if you&apos;re unfamiliar.</p>
    <button className="create-statue-btn">Create Statue</button>
  </div>
  );
};

export default ProfileNoStatue;