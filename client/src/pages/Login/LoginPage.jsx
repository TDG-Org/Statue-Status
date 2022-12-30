import React, { useState, useRef, useEffect } from "react";

// Styles
import "./LoginPage.scss";

const LoginPage = () => { 

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