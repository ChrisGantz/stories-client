import React from "react";
import { connect } from "react-redux";
import { likesData } from "../../actions/posts";
import { Link } from "react-router-dom";

export function PostList(props) {
  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
      <div className="vote-container">
        <button className="like-button">
          <span className="fa fa-thumbs-up" />
        </button>
        <span className="like-counter">{item.likes}</span>
        <button className="dislike-button">
          <span className="fa fa-thumbs-down" />
        </button>
      </div>
      <div className="just-post">{item.post}</div>
      <button className="comment-button">
        <Link className="link" to="/comments">
          <i className="far fa-comment-alt" /> Comments
        </Link>
      </button>
    </li>
  ));
  return <div className="my-post-list">{posts}</div>;
}

PostList.defaultProps = {
  postlist: []
};
const mapStateToProps = (state, props) => {
  console.log("in postlist maptostate", state);
  return {
    postlist: state.postData.data
  };
};

export default connect(mapStateToProps)(PostList);
