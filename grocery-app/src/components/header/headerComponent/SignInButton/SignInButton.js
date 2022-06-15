import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignInButton.module.css";
import { connect } from "react-redux";
import { logout } from "../../../../redux/User/user-actions";
const SignInButton = ({ status, logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <button className={classes.button}>
      {status ? (
        <span onClick={handleLogout}>Logout</span>
      ) : (
        <Link to="/signin" className={classes.link__color}>
          <span>Sign In</span>
        </Link>
      )}
    </button>
  );
};
const mapStateToProps = (state) => {
  return {
    status: state.user.Login_status,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);
