import React, { useState, useRef, useEffect } from "react";

// Styles
import "./LoginPage.scss";

const LoginPage = () => { 

  // Typing Text
  const content = "Welcome to Statue Status";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => {
        if (prevText.length === content.length) {
          clearInterval(interval);
          return prevText;
        }
        return content.slice(0, prevText.length + 1);
      });
      setIndex(prevIndex => prevIndex + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
      {text}

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