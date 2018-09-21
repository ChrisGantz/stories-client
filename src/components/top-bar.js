import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function Topbar(props) {
  return (
    <header role="banner">
      <Link to="/" className="link">
        <h1>Writing Concepts</h1>
      </Link>
    </header>
  );
}

export default connect()(Topbar);
