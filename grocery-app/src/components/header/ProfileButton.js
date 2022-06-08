import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileButton.module.css";
import { connect } from "react-redux";
const ProfileButton = ({ status }) => {
  return (
    <button className={classes.button__profile}>
      <Link
        to="/profile"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <span>Profile</span>
      </Link>
    </button>
  );
};
const mapStateToProps = (state) => {
  return {
    status: state.user.Login_status,
  };
};
export default connect(mapStateToProps)(ProfileButton);
