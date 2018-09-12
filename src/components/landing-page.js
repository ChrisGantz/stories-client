import React from "react";
import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";
import TopBar from "./top-bar";
import { AboutPage } from "./about-page";
import { LogOut } from "./logout";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="about-page">
      <AboutPage />
      <div className="about-sign-up-button">
        <Link to="/register">Sign Up</Link>
      </div>
      <div className="about-login-button">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
