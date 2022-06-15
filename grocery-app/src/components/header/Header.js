import React, { Fragment } from "react";
import classes from "./Header.module.css";
import banner from "../assets/banner.jpg";
import HeaderCartButton from "./headerComponent/HeaderCartButton/HeaderCartButton";
import { Link } from "react-router-dom";
import SignInButton from "./headerComponent/SignInButton/SignInButton";
import SearchBar from "./headerComponent/SearchBar/SearchBar";
import ProfileButton from "./headerComponent/ProfileButton/ProfileButton";
import { connect } from "react-redux";
import OrderButton from "./headerComponent/OrderButton/OrderButton";
const Header = ({ status }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/" className={classes.link__color}>
          <h1 component={Link} to={"/first"}>
            Grocery App
          </h1>
        </Link>
        <SearchBar />
        {status ? (
          <div className={classes.header__order__button}>
            <OrderButton /> <ProfileButton />
          </div>
        ) : null}

        <SignInButton />
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={banner} alt="full of delicous food!"></img>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    status: state.user.Login_status,
  };
};

export default connect(mapStateToProps)(Header);
