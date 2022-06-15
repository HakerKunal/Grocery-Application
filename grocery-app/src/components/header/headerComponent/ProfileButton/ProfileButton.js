import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileButton.module.css";

const ProfileButton = () => {
  return (
    <button className={classes.button__profile}>
      <Link to="/profile" className={classes.link__color}>
        <span>Profile</span>
      </Link>
    </button>
  );
};

export default ProfileButton;
