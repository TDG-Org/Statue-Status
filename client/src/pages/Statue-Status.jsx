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
    <>
      {/* Left Side (User Avatar and Navbar)  */}
      <Aside currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Renders the Current/Selected Page  */}
      {renderPage()}

      {/* Footer Section  */}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
};

export default StatueStatus;