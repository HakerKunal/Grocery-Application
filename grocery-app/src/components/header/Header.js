import React, { Fragment } from "react";
import classes from "./header.module.css";
import banner from "./banner.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import SignInButton from "./SignInButton";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <h1 component={Link} to={"/first"}>
            Grocery App
          </h1>
        </Link>
        <SearchBar />
        <ProfileButton />
        <SignInButton />
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={banner} alt="full of delicous food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
