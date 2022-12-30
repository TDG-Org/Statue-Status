import React, { useState, useRef, useEffect } from "react";

// Styles
import "./LoginPage.scss";

// Components 
import { TypingText } from "../../components/Login";

const LoginPage = () => { 

  const content = "Welcome to Statue Status! - Nate";

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

      {/* Typing Text  */}
      <TypingText message={ content } />


      {elements.map((element, index) => (
        React.cloneElement(element.element, {
          style: { opacity: opacities[index], transition: "opacity 1s" },
          key: element.id
        })
      ))}
      
    </div>
  );
};

export default LoginPage;