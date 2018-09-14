import React from "react";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "../css/dashboardcss/navbar.css";
import LogOut from "../logout";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <header>
        <img
          className="imgCircle"
          src="https://tf-assets-prod.s3.amazonaws.com/tf-curric/WEB-DEV-001/2.4.3_the_position_property/icon.png"
          alt="cat image"
        />
        <ul>
          <li>
            <Link to="/Dashboard">Home</Link>
          </li>
          <li>
            <Link to="/posts/all">All Post's</Link>
          </li>
          <li>
            <LogOut />
          </li>
        </ul>
      </header>
    </div>
  );
}

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(NavBar);
