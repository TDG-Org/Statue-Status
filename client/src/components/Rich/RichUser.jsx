import React from "react";

const RichUser = () => {
  return (
    <div className="top-user">

      {/* User Left side  */}
      <div className="top-user-left">
        <span className="top-user-rank">#1</span>
        <img src="https://thumbor.forbes.com/thumbor/200x200/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F62d700cd6094d2c180f269b9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D959%26cropY1%3D0%26cropY2%3D959" alt="top user" className="top-user-avatar" />
        <span className="top-user-name">Elon Musk</span>
      </div>

      {/* User Right side  */}
      <div className="top-user-right">
        <span className="top-user-country">United States</span>
        <span className="top-user-money"> $<span>100,000,000,000</span></span>
        </div>
  </div>
  );
};

export default RichUser;