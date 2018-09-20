import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import requiresLogin from "../requires-login";
import NavBar from "./nav-bar";
import {
  likesData,
  dislikesData,
  allUsersData,
  userData
} from "../../actions/posts";

export class AllPostList extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.props.dispatch(userData());
    this.props.dispatch(allUsersData());
  }
  render() {
    // if (!this.props.loggedIn) {
    //   return <Redirect to="/" />;
    // }
    const like = id => {
      console.log("in like");
      this.props.dispatch(likesData(id));
    };
    const dislike = id => {
      console.log("in dislike");
      this.props.dispatch(dislikesData(id));
    };
    const posts = this.props.postlist.map((item, index) => (
      <li className="post-item" key={item.id} data-index={index}>
        <div className="vote-container">
          <button className="like-button" onClick={() => like(item.id)}>
            <span className="fa fa-thumbs-up" />
          </button>
          <span className="like-counter">{item.likes}</span>
          <button className="dislike-button" onClick={() => dislike(item.id)}>
            <span className="fa fa-thumbs-down" />
          </button>
        </div>
        <div className="just-post">{item.post}</div>
        <button className="comment-button">
          <Link className="link" to={`/comments/${item.id}`}>
            <i className="far fa-comment-alt" /> Comments
          </Link>
        </button>
      </li>
    ));
    return (
      <div>
        <NavBar />
        <div className="my-post-list">
          <ul>{posts}</ul>
        </div>
      </div>
    );
  }
}

// PostList.defaultProps = {
//   postlist: []
// };
const mapStateToProps = (state, props) => {
  return {
    postlist: state.allPostData.allData,
    // state.auth.authToken fakes being logged in
    loggedIn: state.auth.currentUser !== null || state.auth.authToken
  };
};

export default requiresLogin()(connect(mapStateToProps)(AllPostList));
