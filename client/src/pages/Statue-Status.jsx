import React, { useState } from "react";

// Components
import {
  Aside,
  Footer,
  Nav,
  User
} from "../components";

// Pages 
import {
  About,
  Discover,
  Home,
  Profile,
  Settings
} from "./index";

const PortfolioContainer = () => {

  const [currentPage, setCurrentPage] = useState("Home");

  // check which page the user is currently on 
  const renderPage = () => {

    // Render Home page 
    if (currentPage === "Home") {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    // Render Discover page 
    if (currentPage === "Discover") {
      return <Discover />;
    }

    // Render Profile page 
    if (currentPage === "Profile") {
      return <Profile />;
    }

    // Render Settings page 
    if (currentPage === "Settings") {
      return <Settings />;
    }

    // Render About page 
    if (currentPage === "About") {
      return <About currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />  */}

      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
};

export default PortfolioContainer;