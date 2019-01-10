import React from "react";
import { Link } from "react-router-dom";
import ideaBulb from "./ideabulb.jpg";
// import "../css/dashboardcss/navbar.css";
import LogOut from "../logout";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <nav>
        <img
          className="bookImg"
          src={ideaBulb}
          width="350"
          alt="Book Silhouette"
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
