import React, { useState, useEffect } from "react";

// Styles
import "./LoginPage.scss";

// Components 
import { TypingText } from "../../components";

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
    {
      element: <div className="li-block">Element 3</div>, id: 3
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
      }, index * 250);
    });
  }, []);

  return (
    <div className="LoginPage page">

      <h1>Login</h1>
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
          
          <div className="login-input-wrapper">
            <button className="login-btn">
              Login
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;