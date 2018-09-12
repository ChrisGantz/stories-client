import React from "react";
import { Link } from "react-router-dom";
import "./css/topbar.css";

export default function Topbar(props) {
  return (
    <header>
      <Link to="/" className="link-stories">
        <h1>Write Stories</h1>
      </Link>
    </header>
  );
}
