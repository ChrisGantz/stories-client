import React from "react";
import { connect } from "react-redux";

export function PostList(props) {
  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
      <div>{item.post}</div>
      <div>
        <button>upvote arrow </button>
        <span>{props.total}</span>
        <button> downvote arrow</button>
      </div>
    </li>
  ));
  return <div>{posts}</div>;
}

PostList.defaultProps = {
  postlist: []
};
const mapStateToProps = (state, props) => {
  return {
    postlist: state.postData.data,
    likes: state.likes,
    total: (state.total = 5)
  };
};

export default connect(mapStateToProps)(PostList);
