import React, { useState } from "react";
import "./signup.css";
import sidenav from "../../../components/assets/sideimage3.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  login,
  setToken,
  setUserDetails,
} from "../../../redux/User/user-actions";
import { useNavigate } from "react-router-dom";
import { fetchUserDetail, signinServer } from "../../../services/auth_services";

const SignIn = ({ logIn, setToken, setUserDetails }) => {
  const [userObj, setUserObj] = useState({ username: "", password: "" });
  let navigate = useNavigate();

  const handleUsername = (event) => {
    setUserObj((userObj) => ({ ...userObj, username: event.target.value }));
  };
  const handlePassword = (event) => {
    setUserObj((userObj) => ({ ...userObj, password: event.target.value }));
  };
  const saveUserDetails = (token) => {
    fetchUserDetail({ headers: { Authorization: token } }).then((res) =>
      setUserDetails(res.data.data[0])
    );
  };
  const handleSubmit = () => {
    if (userObj.username === "") {
      alert("Username should not be empty");
    }
    if (userObj.password === "") {
      alert("Password is empty");
    }
    if (userObj.username !== "" && userObj.password !== "") {
      signinServer(userObj)
        .then((res) => {
          logIn();
          setToken(res.data.token);
          saveUserDetails(res.data.token);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert(JSON.stringify(err.response.data.message, null, 4));
        });
    }
  };

  return (
    <div className="signup-outer-div">
      <div className="signup-image">
        <img src={sidenav} width="700px" height="600px" alt="login"></img>
      </div>
      <div className="signup-form">
        <span className="signup-heading">Welcome to Grocery App</span>

        <div className="signup">
          <label className="sign-heading">Sign In</label>
          <input
            type="text"
            name="username"
            placeholder="User name"
            required={true}
            onChange={handleUsername}
          />

          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={handlePassword}
          />
          <button className="sign-button" onClick={handleSubmit}>
            Log In
          </button>
          <div className="links">
            <Link to="/signup" className="login_link">
              Sign Up
            </Link>
            <Link to="/" className="home_link">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(login()),
    setToken: (token) => dispatch(setToken(token)),
    setUserDetails: (userObj) => dispatch(setUserDetails(userObj)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
