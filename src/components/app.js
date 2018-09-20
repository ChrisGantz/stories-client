import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import { refreshAuthToken, clearAuth } from "../actions/auth";
import Dashboard from "./dashboard";
import LandingPage from "./landing-page";
import SignUpPage from "./sign-up-page";
import LoginPage from "./login-page";
import PostForm from "./dashboard-components/create-post-form";
import AllPostList from "./dashboard-components/all-posts";
import Comments from "./dashboard-components/comments";

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      20 * 60 * 1000 // 20 min
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={SignUpPage} />
        <Route exact path="/posts" component={PostForm} />
        <Route exact path="/posts/all" component={AllPostList} />
        <Route exact path="/comments/:id" component={Comments} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
