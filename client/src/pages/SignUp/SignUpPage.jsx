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

import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

const SignUpPage = () => {

  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: "", email: "", password: "", repassword: "" });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false); 
  const [addUser] = useMutation(ADD_USER);
  const content = "Hey, let's get you set up!";
  const [isPassEmpty, setIsPassEmpty] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    if (document.querySelector(".signup-input-pass")?.value.length >= 6) {
      setIsPassEmpty(false);
    } else setIsPassEmpty(true);
  };

  const handleFormSubmit = async (event) => {
    console.log(event);
    event.preventDefault(); 

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    try {
        const { data } = await addUser({
          variables: { 
              username: userFormData.username,
              email: userFormData.email,
              password: userFormData.password,
             },
        });

        Auth.login(data.addUser.token);
    } catch (error) {
        throw error;
    }

    setUserFormData({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });
  }; 

  // Fading in Elements 
  const elements = [
     // Username 
    {
      element:
              <div className="signup-sect">
                <p>Username:</p>
                 <input
                  name="username"
                  onChange={handleInputChange}
                  required
                  value={userFormData.username}
                  className="signup-input signup-input-username"
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
                  value={userFormData.email}
                  name="email"
                  onChange={handleInputChange}
                  required
                  className="signup-input signup-input-email"
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
                  name="password"
                  value={userFormData.password}
                  className="signup-input signup-input-pass"
                  type="password"
                  onChange={handleInputChange}
                />
              </div>,
      id: 3
    },
    // Re-Enter Password 
    {
      element:
              <div className={`signup-sect ${isPassEmpty ? "hide" : ""}`}>
                <p>Re-Enter Password:</p>
          <input
                  value={userFormData.repassword}
                  required
                  type="password"
                  name="repassword"
                  onChange={handleInputChange}
                  className="signup-input re-enter-pass"
                />
              </div>,
      id: 4
    },
    // Button 
    {
      element: 
              <div className="signup-button-wrapper">
                <button
                  onClick={checkSignUpInputs}
                  className="signup-btn"
                >
                  Create Account
                </button>
              </div>,
      id: 5
    }
  ];

  // Function to check if pass is empty to let user reEnter 
  function displayReEnterPass() {
    console.log(document.querySelector(".signup-input-pass")?.value);
    if (document.querySelector(".signup-input-pass")?.value.length >= 6) {
      setIsPassEmpty(false);
    } else setIsPassEmpty(true);
  }

  // Function to check the inputs before sending the data to the backend 
  function checkSignUpInputs(e) {

    // Retrieve all elements 
    let newUsername = document.querySelector(".signup-input-username")?.value;
    let newEmail = document.querySelector(".signup-input-email")?.value;
    let newPassword = document.querySelector(".signup-input-pass")?.value;
    let ReEnterPass = document.querySelector(".re-enter-pass")?.value;

    // Check Username 
    if (newUsername === "") {
      swal({
        text: "Please add your Username",
        buttons: false
      });
      setTimeout(() => {
        swal.close();
      }, 1250);
      return;
    }

    // Check Email 
    if (newEmail === "") {
      swal({
        text: "Please add your Email",
        buttons: false
      });
      setTimeout(() => {
        swal.close();
      }, 1250);
      return;
    }

    // Check Password 
    if (newPassword === "") {
      swal({
        text: "Please add your Password (6 Characters at least)",
        buttons: false
      });
      setTimeout(() => {
        swal.close();
      }, 1250);
      return;
    }

    // Check ReEnterPass 
    if (ReEnterPass === "") {
      swal({
        text: "Please retype your password",
        buttons: false
      });
      setTimeout(() => {
        swal.close();
      }, 1250);
      return;
    }

    handleFormSubmit(e);
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

      <div className="container">
      <hr />

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