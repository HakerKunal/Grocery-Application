import React from "react";
import Header from "../../components/header/Header";
import { connect } from "react-redux";
import classes from "./Profile.module.css";
import profileImg from "./profile.jpg";

const Profile = ({ userObj }) => {
  return (
    <div>
      <Header />
      {userObj ? (
        <div className={classes.profile__outerbox}>
          <img className={classes.profile__image} src={profileImg} />
          <div className={classes.username__box}>
            <div className={classes.name}>User Name</div>
            <div className={classes.userdata}>{userObj.username}</div>
          </div>
          <div className={classes.username__box}>
            <div className={classes.name}>First Name</div>
            <div className={classes.userdata}>{userObj.first_name}</div>
          </div>
          <div className={classes.username__box}>
            <div className={classes.name}>Last Name</div>
            <div className={classes.userdata}>{userObj.last_name}</div>
          </div>
          <div className={classes.username__box}>
            <div className={classes.name}>Email</div>
            <div className={classes.userdata}> {userObj.email}</div>
          </div>
        </div>
      ) : (
        <div className={classes.error__text}> Please Login First.....</div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userObj: state.user.userObj,
  };
};
export default connect(mapStateToProps)(Profile);
