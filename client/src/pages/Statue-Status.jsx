import React, { useState } from "react";

// Components
import {
  Aside,
  Footer,
  Model,
  Nav
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
    if (currentPage === "Home") {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} />; 
    }

    if (currentPage === "Discover") {
      return <Discover />;
    }

    if (currentPage === "Profile") {
      return <Profile />;
    }

    if (currentPage === "Settings") {
      return <Settings />;
    }

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