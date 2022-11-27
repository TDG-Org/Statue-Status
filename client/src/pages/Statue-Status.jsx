import React, { useState } from "react";

// Components
import {
  Aside,
  Footer
} from "../components";

// Pages 
import {
  AboutPage,
  DiscoverPage,
  HomePage,
  ProfilePage,
  SettingsPage
} from "./index";

// Styles 
import "../sass/main.scss"; 

const StatueStatus = () => {

  const [currentPage, setCurrentPage] = useState("Home");

  // check which page the user is currently on 
  const renderPage = () => {

    // Render Home page 
    if (currentPage === "Home") {
      return <HomePage currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    // Render Discover page 
    if (currentPage === "Discover") {
      return <DiscoverPage />;
    }

    // Render Profile page 
    if (currentPage === "Profile") {
      return <ProfilePage />;
    }

    // Render Settings page 
    if (currentPage === "Settings") {
      return <SettingsPage />;
    }

    // Render About page 
    if (currentPage === "About") {
      return <AboutPage currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="Statue-Status-Wrapper">
      {/* Left Side (User Avatar and Navbar)  */}
      <Aside currentPage={currentPage} handlePageChange={handlePageChange} />

      <div className="page-side-wrapper">

        {/* Renders the Current/Selected Page  */}
        <div className="wrapper-page-sect">
          {renderPage()}
        </div>

        {/* Footer Section  */}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        
      </div>
    </div>
  );
};

export default StatueStatus;