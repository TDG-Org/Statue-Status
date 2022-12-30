import React from "react";

// Components
import {
  Aside,
  Footer
} from "../components";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// Pages 
import {
  HomePage,
  AboutPage,
  SavedPage,
  LoginPage,
  SignUpPage,
  RichestPage,
  ProfilePage,
  DiscoverPage,
  NotFoundPage,
  PowerfulPage,
  SettingsPage,
  FollowersPage,
  FollowingPage,
  MiniStatuePage,
} from "./";

// Styles 
import "../sass/main.scss"; 
import "../sass/utils/animations.scss";

// Animations 
import { RevealY } from "../utils/animations";

const StatueStatus = () => {

  const location = useLocation();

  return (
    <div className="Statue-Status-Wrapper">

      {/* Left Side (User Avatar and Navbar)  */}
      <Aside />

      <div className="page-side-wrapper">

        {/* Every Page with their routes */}
        <div className="wrapper-page-sect">
          <Routes location={location} key={location.pathname}>

            {/* Main Pages */}
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            {/* Home Extend Pages  */}
            <Route path="/richest" element={<RichestPage />} />
            <Route path="/powerful" element={<PowerfulPage />} />
            <Route path="/mini-statue" element={<MiniStatuePage />} />

            {/* Follow Lists Pages */}
            <Route path="/followers" element={<FollowersPage />} />
            <Route path="/following" element={<FollowingPage />} />

            {/* Profile Extend Pages */}
            <Route path="/saved" element={<SavedPage />} />

          </Routes>
        </div>

        {/* Footer Section  */}
        <Footer />
        
      </div>

    </div>
  );
};

export default StatueStatus;