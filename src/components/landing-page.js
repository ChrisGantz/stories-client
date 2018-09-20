import React from "react";
import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";
import { AboutPage } from "./about-page";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="about-page row">
      <AboutPage />
      <div className="about-sign-up-link">
        <Link className="link-sign-up" to="/register">
          Sign Up
        </Link>
      </div>
      <div className="about-login-link">
        <Link className="link-login" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
