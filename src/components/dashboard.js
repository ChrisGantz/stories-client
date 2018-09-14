import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
// import { fetchProtectedData } from "../actions/protected-data";
import { userData, allUsersData } from "../actions/posts";
import NavBar from "./dashboard-components/nav-bar";
import PostList from "./dashboard-components/post-list";
import SideBar from "./dashboard-components/post-side-bar";

export class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.props.dispatch(userData());
    this.props.dispatch(allUsersData());
  }
  render() {
    console.log("inside Dashboard", this.props);
    return (
      <div className="dashboard">
        <NavBar />
        <SideBar />
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  console.log("inmaptstate Dashboard", state);
  return {
    username: state.auth.currentUser.username,
    email: `${currentUser.email}`
    // post: state.post
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
