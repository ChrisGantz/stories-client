import React from "react";
import { connect } from "react-redux";
import { likesData } from "../../actions/posts";

export function PostList(props) {
  // props.dispatch(likesData());

  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
      <div>{item.post}</div>
      <div>
        <button>^</button>
        <span>{props.likes}</span>
        <button>v</button>
      </div>
    </li>
  ));
  return <div>{posts}</div>;
}

PostList.defaultProps = {
  postlist: []
};
const mapStateToProps = (state, props) => {
  console.log("in postlist maptostate", state);
  return {
    postlist: state.postData.data,
    likes: state.likes,
    total: state.total
  };
};

export default connect(mapStateToProps)(PostList);
