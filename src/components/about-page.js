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
          Prism cornhole tousled affogato quinoa heirloom plaid ugh bespoke
          raclette, vaporware beard stumptown normcore typewriter. Mustache
          ennui air plant pok pok disrupt cronut stumptown forage. Pour-over
          food truck hella tumeric brooklyn tofu lo-fi cold-pressed raclette
          humblebrag celiac hashtag cliche offal everyday carry Prism cornhole
          tousled affogato quinoa heirloom plaid ugh bespoke raclette, vaporware
          beard stumptown normcore typewriter. Mustache ennui air plant pok pok
          disrupt cronut stumptown forage. Pour-over food truck hella tumeric
          brook
        </p>
      </div>
    </div>
  );
}

export default connect()(AboutPage);
