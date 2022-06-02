import React, { Fragment } from "react";
import classes from "./header.module.css";
import banner from "./banner.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Grocery App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={banner} alt="full of delicous food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
