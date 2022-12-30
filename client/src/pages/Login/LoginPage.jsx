import React, { useState, useEffect } from "react";

// Styles
import "./LoginPage.scss";

// Sweet Alert 
import swal from "sweetalert";


// Link 
import { Link } from "react-router-dom";

// Components 
import {
  Flares,
  TypingText
} from "../../components";

const LoginPage = () => { 

  const content = "Welcome to Statue Status! 🎉";

  // Fading in Elements 
  const elements = [
     // Email 
    {
      element:
              <div className="login-sect">
                <p>Email:</p>
                <input className="login-input" type="email" />
              </div>,
      id: 1
    },
    // Password 
    {
      element:
              <div className="login-sect">
                <p>Password:</p>
                <input className="login-input" type="password" />
              </div>,
      id: 2
    },
    // Button 
    {
      element: 
              <div className="login-button-wrapper">
                <button className="login-btn">
                  Login
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
    <div className="LoginPage page">

      <h1>Login <i className="bi bi-box-arrow-in-right"></i></h1>
      <hr />

      <div className="container">

        {/* Typing Text  */}
        <TypingText message={ content } />

        <div className="login-inputs-wrapper">
        {/* Login Input  */}
        {elements.map((element, index) => (
          React.cloneElement(element.element, {
            style: { opacity: opacities[index], transition: "opacity 1s" },
            key: element.id
          })
        ))}
        </div>

        <p className="create-acc-message">Don&apos;t have an account?</p>
        <div className="create-acc-btn-wrapper">
          <Link
            className="create-acc-btn"
            to="/sign-up"
          >
            Sign Up
          </Link>
        </div>

      </div>

      <Flares />

    </div>
  );
};

export default LoginPage;