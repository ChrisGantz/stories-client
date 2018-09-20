import React from "react";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

// import "../css/dashboardcss/navbar.css";
import LogOut from "../logout";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <nav>
        <img
          className="bookImg"
          src="http://mariafresa.net/newimages/bobook-clipart-symbol-10.jpg"
          width="350"
          alt="Book Silhouette Free Download Clip Art Free Clip Art On "
        />
        <ul>
          <li>
            <Link className="link" to="/dashboard">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/posts/all">
              All Post's
            </Link>
          </li>
          <li>
            <LogOut />
          </li>
        </ul>
      </nav>
    </div>
  );
}

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(NavBar);
