import React, { useState, useEffect } from "react";

// Styles
import "./LoginPage.scss";

// Components 
import { TypingText } from "../../components";

const LoginPage = () => { 

  const content = "Welcome to Statue Status! 🎉";

  // Fading in Elements 
  const elements = [
    { element: <div className="li-block">Element 1</div>, id: 1 },
    { element: <div className="li-block">Element 2</div>, id: 2 },
    { element: <div className="li-block">Element 3</div>, id: 3 }
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

        {/* Login Input  */}
        {elements.map((element, index) => (
          React.cloneElement(element.element, {
            style: { opacity: opacities[index], transition: "opacity 1s" },
            key: element.id
          })
        ))}

        <div className="login-inputs-wrapper">

          {/* Email  */}
        <div className="login-email">
          <p>Email:</p>
        </div>
          
        </div>


      </div>

    </div>
  );
};

export default LoginPage;