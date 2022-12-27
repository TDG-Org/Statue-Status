// Core Components File to Export as bundle

// Import General Components
import Nav from "./Nav";
import User from "./User";
import Aside from "./Aside";
import Footer from "./Footer";

// Home Page 
import { Pie, RichList, Chart } from "./Home";

// Profile Page 
import { EditProfile } from "./Profile";

// Discover Page 
import { Explore, Friends } from "./Discover";

// Statue Related 
import { ProfileStatue } from "./Statue";

// Settings Page 
import { General, MyAccount } from "./Settings";

// Export 
export {
  Pie,
  Nav,
  User,
  Aside,
  Chart,
  Footer,
  Friends,
  Explore,
  General,
  RichList,
  MyAccount,
  EditProfile,
  ProfileStatue,
};