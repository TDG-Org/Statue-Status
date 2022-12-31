import React, { useState, useEffect } from "react";

// Styles 
import "./NotFoundPage.scss";

// Link 
import { Link } from "react-router-dom";

// Components 
import { TypingText } from "../../components";

const NotFoundPage = () => {

  let content = "Hmmm... nothing was found here";

    // Fading in Elements 
    const elements = [
      // The Message 
     {
       element:
              <h4>
                <TypingText message={content} />
              </h4>,
       id: 2
     },
    //  2nd Message 
     {
       element:
              <p>Let&apos;s take you back!</p>,
       id: 3
     },
    //  Link Back to Home 
     {
       element:
              <Link to="/"><i className="bi bi-house-door-fill" title="Statue Status"></i></Link>,
       id: 4
     },
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
      }, index * 700);
    });
  }, []);

  return (
    <div className="NotFoundPage page page-full">

      {/* The Content  */}
      <div className="container">
        <div className="not-found-text-content">
          <h1>404</h1>
          {elements.map((element, index) => (
            React.cloneElement(element.element, {
              style: { opacity: opacities[index], transition: "opacity 1s" },
              key: element.id
            })
          ))}
        </div>
      </div>

      {/* The Background  */}
      <div className="the-not-found-bg-wrapper">
        <div className="not-found-black one-black-sec"></div>
        <div className="not-fount-bg "></div>
        <div className="not-found-black two-black-sec"></div>
      </div>

      {/* The Birds  */}
      <div className="birds-wrapper">
        <div className="bird"></div>
        <div className="bird"></div>
        <div className="bird"></div>
      </div>

      
    </div>
  );
};

export default NotFoundPage;