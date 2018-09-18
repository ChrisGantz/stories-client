import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function Topbar(props) {
  return (
    <header>
      <Link to="/" className="link">
        <h1>Write Stories</h1>
      </Link>
    </header>
  );
}

export default connect()(Topbar);
