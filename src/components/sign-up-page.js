import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignUp from "./sign-up-form";
import Topbar from "./top-bar";

export function SignUpPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="signup-page">
      <Topbar />
      <SignUp />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);
