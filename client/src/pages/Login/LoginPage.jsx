import React, { useState, useRef, useEffect } from "react";

// Styles
import "./LoginPage.scss";

const LoginPage = () => { 

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 1500);
  }, []);

  return (
    <div className="LoginPage page">

      <h1>Login</h1>
      <hr />

      <div style={{ opacity, transition: "opacity 1s" }} className="container">
        <div className="pallet">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, culpa quaerat. Fugit odit numquam molestiae debitis, adipisci necessitatibus exercitationem ex nam ipsam dignissimos quas beatae quod, reprehenderit hic officiis tempore!
        </div>
      </div>

    </div>
  );
};

export default LoginPage;