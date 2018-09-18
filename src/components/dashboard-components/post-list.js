import React from "react";
import { connect } from "react-redux";
import { likesData } from "../../actions/posts";
import { Link } from "react-router-dom";

export function PostList(props) {
  // props.dispatch(likesData());

  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
      <div className="vote-container">
        <button className="like-button fa fa-thumbs-up" />
        <span className="like-counter">{item.likes}</span>
        <button className="dislike-button fa fa-thumbs-down" />
      </div>
      <div className="just-post">{item.post}</div>
      <button className="comment-button">
        <Link className="link" to="/comments">
          >Comments
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
