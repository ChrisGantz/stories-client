import React from "react";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

// import "../css/dashboardcss/navbar.css";

export class SideBar extends React.Component {
  // add action when button clicked
  render() {
    return (
      <div className="post-button">
        <Link className="link style-links create-post-button" to="/posts">
          CREATE POST
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SideBar);
