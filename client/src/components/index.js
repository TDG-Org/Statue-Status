// Core Components File to Export as bundle

// Import General Components
import Nav from "./Nav";
import User from "./User";
import Aside from "./Aside";
import Footer from "./Footer";

// Profile Page 
import { EditProfile } from "./Profile";

// Discover Page 
import { Explore, Friends } from "./Discover";

// Statue Related 
import { ProfileStatue } from "./Statue";

// Settings Page 
import { General, MyAccount } from "./Settings";

// About Page 
import { Intro } from "./About";

// Export 
export {
  Nav,
  User,
  Aside,
  Intro,
  Footer,
  Friends,
  Explore,
  General,
  MyAccount,
  EditProfile,
  ProfileStatue,
};