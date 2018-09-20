import React from "react";
// import { connect } from 'tls';
import TopBar from "./top-bar";
import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";

export function AboutPage(props) {
  return (
    <div className="about">
      <TopBar />
      <div className="info">
        <h2>What you can do here?</h2>
        <p className="about-paragraph">
          Welcome to writing concepts! After signing up and logging you will be
          at the homepage where you can add posts about any interesting ideas
          for the start of a book, movie anything! The idea should be short,
          concise and to the point. For example, "Aliens have arived to your
          home and gave you two choices stay on earth or go with them and they
          will show you everything the universe has to offer..." You will be
          able to upvote and downvote a idea as well as comment to others and
          expand on that idea.
        </p>
      </div>
    </div>
  );
}

export default connect()(AboutPage);
