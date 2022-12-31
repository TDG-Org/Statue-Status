import React from "react";

// Styles 
import "./NotFoundPage.scss";

// Images/SVGs

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage page page-full">

      {/* The Content  */}
      <div className="container">
        <div className="not-found-text-content">
          <h1>404</h1>
          <h4>Hmmm... nothing was found here</h4>
          <p>Let&apos;s take you back!</p>
          <i className="bi bi-house-door-fill" title="Statue Status"></i>
        </div>
      </div>

      {/* The Background  */}
      <div className="the-not-found-bg-wrapper">
        <div className="not-found-black one"></div>
        <div className="not-fount-bg "></div>
        <div className="not-found-black two"></div>
      </div>

      {/* The Birds  */}
      <div className="birds-wrapper">
        <div className="bird"></div>
        <div className="bird"></div>
        <div className="bird"></div>
      </div>

      
    </div>
  );
};

export default NotFoundPage;