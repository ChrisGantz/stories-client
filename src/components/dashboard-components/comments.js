import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import {
  likesData,
  dislikesData,
  userData,
  allUsersData
} from "../../actions/posts";
import { Link } from "react-router-dom";
import CommentForm from "./create-comment-form";

export class Comments extends React.Component {
  componentDidMount() {
    // another way to get certain post by id
    // this.props.dispatch(onePostData(this.props.match.params.id));
    this.props.dispatch(userData());
    this.props.dispatch(allUsersData());
  }

  render() {
    console.log(this.props);
    const like = id => {
      console.log("in like");
      this.props.dispatch(likesData(id));
    };
    const dislike = id => {
      console.log("in dislike");
      this.props.dispatch(dislikesData(id));
    };
    const onePost = this.props.posts.find(post => {
      return post.id === this.props.match.params.id;
    });
    if (!onePost) {
      return <div>Loading...</div>;
    }
    console.log("in one post", onePost);
    const comments = onePost.comments.reverse().map((comment, index) => {
      return (
        <li className="post-item" key={index}>
          <div className="just-post">{comment}</div>
        </li>
      );
    });
    return (
      <div>
        <Link className="link style-links" to="/posts/all">
          Back
        </Link>
        <li className="post-item">
          <div className="vote-container">
            <button className="like-button" onClick={() => like(onePost.id)}>
              <span className="fa fa-thumbs-up" />
            </button>
            <span className="like-counter">{onePost.likes}</span>
            <button
              className="dislike-button"
              onClick={() => dislike(onePost.id)}
            >
              <span className="fa fa-thumbs-down" />
            </button>
          </div>
          <div className="just-post">{onePost.post}</div>
          <div>
            <CommentForm id={onePost.id} />
          </div>
        </li>
        <div>{comments}</div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    posts: state.allPostData.allData
  };
};

export default connect(mapStateToProps)(Comments);
