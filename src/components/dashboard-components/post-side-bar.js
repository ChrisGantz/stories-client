import React from "react";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "../css/dashboardcss/navbar.css";

export class SideBar extends React.Component {
  // add action when button clicked
  onPost() {}

  render() {
    let postButton = <button onClick={() => this.onPost()}>CREATE POST</button>;
    return (
      <div className="post-button">
        <button>CREATE POST</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
