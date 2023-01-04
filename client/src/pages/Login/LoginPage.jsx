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

// Auth 
import Auth from "../../utils/auth";

// Mutations
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

const LoginPage = () => { 

  // Initial State for Form 
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  // Mutation & Content
  const [loginUser] = useMutation(LOGIN_USER);
  const content = "Welcome to Statue Status! 🎉";

  // Function to update state on change 
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Function to handle Login Submit 
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
        const { data } = await loginUser({
          variables: {
            ...userFormData
          }
        });
        Auth.login(data.login.token);
    } catch (error) {
      console.log(error.message);
      if (error.message == "No user found with this email address") {
        swal({
          title: "Uh Oh...",
          text: "No account found with that email.",
          buttons: false
        });
        setTimeout(() => {
          swal.close();
        }, 1750);
      }
        throw error;
    }
    // Reset State 
    setUserFormData({
        username: "",
        email: "",
        password: "",
    });
  };

  // Fading in Elements 
  const elements = [
     // Email 
    {
      element:
              <div className="login-sect">
                <p>Email:</p>
                  <input
                    required
                    name="email"
                    type="email"
                    className="login-input"
                    value={userFormData.email}
                    onChange={handleInputChange}
                 />
              </div>,
      id: 1
    },
    // Password 
    {
      element:
              <div className="login-sect">
                <p>Password:</p>
                <input
                  required
                  name="password"
                  type="password"
                  className="login-input"
                  value={userFormData.password}
                  onChange={handleInputChange}
                />
              </div>,
      id: 2
    },
    // Button 
    {
      element: 
              <div className="login-button-wrapper">
                <button
                  className="login-btn"
                  onClick={handleFormSubmit}
                >
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

      <div className="container">
      <hr />

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