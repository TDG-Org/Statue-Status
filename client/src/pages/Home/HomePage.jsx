import React from "react";
import { format } from "date-fns";

// Styles
import "./HomePage.scss";

const HomePage = () => {

  let today = new Date();

  return (
    <div className="HomePage page">
      <h1 className="homepage-title">
        {format(new Date(), "EEEE, d MMMM yyyy")}
      </h1>

      <div className="pallet">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, aut? Aut, quo deserunt dignissimos ipsa atque accusantium unde voluptas nulla. Mollitia ipsum quidem, deserunt numquam nesciunt nulla molestias non nihil?
      </div>

      <div className="pallet">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, aut? Aut, quo deserunt dignissimos ipsa atque accusantium unde voluptas nulla. Mollitia ipsum quidem, deserunt numquam nesciunt nulla molestias non nihil?
      </div>

    </div>
  );
};

export default HomePage;