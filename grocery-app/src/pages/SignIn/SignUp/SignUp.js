import React, { useState } from "react";
import "./signup.css";
import sidenav from "../../../components/assets/sideimage3.jpg";
import { Link } from "react-router-dom";
import { signupServer } from "../../../services/auth_services";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [userObj, setUserObj] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  let navigate = useNavigate();

  const validateEmail = (event) => {
    setUserObj((userObj) => ({ ...userObj, email: event.target.value }));
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    setIsValid(emailRegex.test(userObj.email));
  };

  const handleSignUp = () => {
    if (!isValid) {
      alert("Enter a valid email address");
    } else if (
      userObj.first_name !== "" &&
      userObj.last_name !== "" &&
      userObj.username !== "" &&
      userObj.email !== "" &&
      userObj.password !== ""
    ) {
      signupServer(userObj)
        .then((res) => {
          console.log(res);
          navigate("/signin");
        })
        .catch((err) =>
          alert(JSON.stringify(err.response.data.error, null, 4))
        );
    } else {
      alert("Every field is required");
    }
  };
  return (
    <div className="signup-outer-div">
      <div className="signup-image">
        <img src={sidenav} width="700px" height="600px" alt="signup"></img>
      </div>
      <div className="signup-form" data-testid="signup-form">
        <span className="signup-heading">Welcome to Grocery App</span>

        <div className="signup">
          <label className="sign-heading">Sign up</label>
          <input
            type="text"
            name="txt"
            placeholder="User name"
            required=""
            onChange={(event) => {
              setUserObj((userObj) => ({
                ...userObj,
                username: event.target.value,
              }));
            }}
            error="true"
          />
          <input
            type="text"
            name="txt"
            placeholder="First name"
            required=""
            onChange={(event) => {
              setUserObj((userObj) => ({
                ...userObj,
                first_name: event.target.value,
              }));
            }}
          />
          <input
            type="text"
            name="txt"
            placeholder="Last name"
            required=""
            onChange={(event, userObj) => {
              setUserObj((userObj) => ({
                ...userObj,
                last_name: event.target.value,
              }));
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            onChange={validateEmail}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(event, userObj) => {
              setUserObj((userObj) => ({
                ...userObj,
                password: event.target.value,
              }));
            }}
          />
          <button className="sign-button" onClick={handleSignUp}>
            Sign up
          </button>
          <div className="links">
            <Link to="/signin" className="login_link">
              Login
            </Link>
            <Link to="/" className="home_link">
              home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
