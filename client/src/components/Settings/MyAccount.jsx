import React from "react";

// Sweet Alert 
import swal from "sweetalert";

// Link 
import { Link } from "react-router-dom";

const MyAccount = () => {

   // Changing username function 
   function updateUsername() {
    let newUsername = {
      name: "",
      password: ""
    };

    swal({
      title: ["New Username"],
      text: "Type in your new username below!",
      content: "input",
      buttons: ["Cancel", "Ok"]
    })
      .then((name) => {

        // check if value is null, then close model 
        if (name == null) {
          swal.close();
          return;
        }

        // Update Object with Values 
        newUsername.name = name;

        // Ask for Password 
        swal({
          text: "Type in your password below to update your username.",
          content: "input",
          buttons: ["Cancel", "Update"]
        })
          .then((password) => {

            if (password == null) {
              swal.close();
              return;
            }

            // Update Object with Values 
            newUsername.password = password;
          })
          .then(() => {
            swal({
              title: newUsername.name + ", you're updated!",
              icon: "success",
              button: false
            });

            setTimeout(() => {
              swal.close();
            }, 1750);

             console.log(newUsername);
        });
      });    
  }

  return (
    <div className="account-sect settings-sect">

    <h3><i className="bi bi-person-fill"></i> My Account</h3>

    <div className="pallet">

      <div className="container">

      {/* Username  */}
      <div className="account-sect-username">
        <h4>Username</h4>
        
        <div className="edit-username-sect">
          <p className="display-username">TDGNate</p>
          <button className="edit-username-btn" onClick={updateUsername}>
            <i className="bi bi-pen"></i>
          </button>
          </div>
          
        <Link
          to="/profile"
          className="edit-profile-link"
          >Edit Profile
        </Link>
      </div>
        
        <hr />

      {/* Password  */}
      <div className="account-sect-pass">
          <h4>Password</h4>
          
          <p className="settings-p">
            Make sure your password contains <span className="pass-fff">uppercase</span>, <span className="pass-fff">lowercase</span>, <span className="pass-fff">digits</span>, and <span className="pass-fff">special characters</span> to keep your account <span className="pass-fff">safe</span> and <span className="pass-fff">secure</span>.
          </p>
        
        <button className="change-password-btn">Change Password</button>
      </div>

      </div>
    </div>

  </div>
  );
};

export default MyAccount;