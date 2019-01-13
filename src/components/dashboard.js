import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
// import { fetchProtectedData } from "../actions/protected-data";
import { userData, allUsersData, deletePost } from "../actions/posts";
import NavBar from "./dashboard-components/nav-bar";
import PostList from "./dashboard-components/post-list";
import SideBar from "./dashboard-components/post-side-bar";
import AreYouSure from "./dashboard-components/pop-up";

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      postId: ''
    }
  }
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.props.dispatch(userData());
    this.props.dispatch(allUsersData());
  }

  askDeletePopUp() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  getIdFromChild(id) {
    // console.log(id);
    this.setState({
      postId: id
    })
  }

  dispatchDelete() {
    this.props.dispatch(deletePost(this.state.postId))
  }
  
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        <SideBar />
        <PostList askDeletePopUp={() => this.askDeletePopUp()} getId={(id) => this.getIdFromChild(id)} />
        {this.state.showPopup ? <AreYouSure askDeletePopUp={() => this.askDeletePopUp()} dispatchDelete={() => this.dispatchDelete()} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
