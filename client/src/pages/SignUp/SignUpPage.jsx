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

  const [isPassEmpty, setIsPassEmpty] = useState(true);

  // Fading in Elements 
  const elements = [
     // Username 
    {
      element:
              <div className="signup-sect">
                <p>Username:</p>
                <input
                  required
                  className="signup-input"
                  type="text"
                />
              </div>,
      id: 1
    },
     // Email 
    {
      element:
              <div className="signup-sect">
                <p>Email:</p>
                <input
                  required
                  className="signup-input"
                  type="email"
                />
              </div>,
      id: 2
    },
    // Password 
    {
      element:
              <div className="signup-sect">
                <p>Password:</p>
                <input
            required
            onChange={displayReEnterPass}
                  className="signup-input signup-input-pass"
                  type="password"
                />
              </div>,
      id: 3
    },
    // Re-Enter Password 
    {
      element:
              <div className={`signup-sect ${isPassEmpty ? "hide" : "signup-input-active"}`}>
                <p>Re-Enter Password:</p>
                <input
                  required
                  className="signup-input re-enter-pass"
                  type="password"
                />
              </div>,
      id: 3
    },
    // Button 
    {
      element: 
              <div className="signup-button-wrapper">
                <button className="signup-btn">
                  Create Account
                </button>
              </div>,
      id: 5
    }
  ];

  // Function to check if pass is empty to let user reEnter 
  function displayReEnterPass() {
    if (document.querySelector(".signup-input-pass")?.value != "") {
      setIsPassEmpty(false);
    } else setIsPassEmpty(true);
  }

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

  useEffect(() => {
    displayReEnterPass();
  }, []);

  return (
    <div className="SignUpPage page">
      <h1>Sign Up <i className="bi bi-person-plus-fill"></i></h1>
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

        <p className="create-acc-message">Already have an account?</p>
        <div className="create-acc-btn-wrapper">
          <Link
            className="create-acc-btn"
            to="/login"
          >
            Login
          </Link>
        </div>

      </div>

      <Flares />

    </div>
  );
};

export default SignUpPage;