import React from "react";

// Styles 
import "./RichestPage.scss";

// Images/SVGs

// Demo Data 
import { allDemoRichestData } from "../../DemoData";

// Components 
import { RichList } from "../../components";

const RichestPage = () => {
  return (
    <div className="RichestPage page">
      <h1>Richest People</h1>
      <hr />

      {/* List Container  */}
      <RichList allRichestData={allDemoRichestData} className="reveal"/>

      <hr />

    </div>
  );
};

export default RichestPage;