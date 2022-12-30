import React, { useState, useEffect } from "react";

// Styles
import "./SignUpPage.scss";

// Sweet Alert 
import swal from "sweetalert";

// Link 
import { Link } from "react-router-dom";

// Components 
import {
  Flares,
  TypingText
} from "../../components";

const SignUpPage = () => {

  const content = "Hey, let's get you set up!";

  // Fading in Elements 
  const elements = [
     // Email 
    {
      element:
              <div className="signup-sect">
                <p>Email:</p>
                <input className="signup-input" type="email" />
              </div>,
      id: 1
    },
    // Password 
    {
      element:
              <div className="signup-sect">
                <p>Password:</p>
                <input className="signup-input" type="password" />
              </div>,
      id: 2
    },
    // Button 
    {
      element: 
              <div className="signup-button-wrapper">
                <button className="signup-btn">
                  Create
                </button>
              </div>,
      id: 3
    }
  ];
  const [opacities, setOpacities] = useState(elements.map(() => 0));

  useEffect(() => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        setOpacities(prevOpacities => {
          const newOpacities = [...prevOpacities];
          newOpacities[index] = 1;
          return newOpacities;
        });
      }, index * 325);
    });
  }, []);

  return (
    <div className="SignUpPage page">
      <h1>SignUpPage</h1>
      <hr />

      <div className="container">

        {/* Typing Text  */}
        <TypingText message={content} />
        
        <div className="signup-inputs-wrapper">
        {/* signup Input  */}
        {elements.map((element, index) => (
          React.cloneElement(element.element, {
            style: { opacity: opacities[index], transition: "opacity 1s" },
            key: element.id
          })
        ))}
        </div>

      </div>

      <Flares />

    </div>
  );
};

export default SignUpPage;