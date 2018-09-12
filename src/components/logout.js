import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

export class LogOut extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    console.log(this.props.loggedIn);
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
    }
    console.log("I am logged in");
    return <div className="logout-button">{logOutButton}</div>;
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LogOut);
