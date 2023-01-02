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
  DevsPage,
  HomePage,
  AboutPage,
  SavedPage,
  LoginPage,
  SignUpPage,
  StatuePage,
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
      { location.pathname !== "/mini-statue" &&
        location.pathname !== "/404" &&
        location.pathname !== "/devs" &&
        location.pathname !== "/statue"
        ? (
        <>
          <Aside />
          <div className="page-side-wrapper">
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
            <Footer />
          </div>
        </>
      ) : (
        // Other Routes Go Here 
          <Routes location={location} key={location.pathname}>
          {/* Statue */}
          <Route path="/statue" element={<StatuePage />} />

          {/* Mini Statue */}
          <Route path="/mini-statue" element={<MiniStatuePage />} />
            
          {/* 404 Page */}
            <Route path="/404" element={<NotFoundPage />} />
            
          {/* Developers Page */}
          <Route path="/devs" element={<DevsPage />} />

        </Routes>
      )}
    </div>
  );
};

export default StatueStatus;