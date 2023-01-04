// Core Components File to Export as bundle

// Import General Components
import Aside from "./Aside";
import Footer from "./Footer";
import GoBackBtn from "./GoBackBtn";
import MiniStatueCard from "./MiniStatueCard";

// Home Page 
import { Pie, RichList, Chart, Main, News } from "./Home";

// Login Page 
import { TypingText, Flares } from "./Login";

// Profile Page 
import { EditProfile } from "./Profile";

// Discover Page 
import { Explore, Friends } from "./Discover";

// Statue Related 
import { ProfileStatue } from "./Statue";

// Settings Page 
import { General, MyAccount } from "./Settings";

// About Page 
import { Intro, Starter, Statues } from "./About";

// Powerful Page 
import { PowerUser } from "./Powerful";

// Statue Page 
import { Client, ClientDetails } from "./Statue";

// Components 
import { Nav, User } from "./Aside Comps";

// Export 
export {
  Pie,
  Nav,
  User,
  News,
  Main,
  Aside,
  Chart,
  Intro,
  Footer,
  Flares,
  Client,
  Friends,
  Explore,
  General,
  Starter,
  Statues,
  RichList,
  GoBackBtn,
  MyAccount,
  PowerUser,
  TypingText,
  EditProfile,
  ClientDetails,
  ProfileStatue,
  MiniStatueCard,
};