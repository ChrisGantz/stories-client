import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBar from "./nav-bar";

export function AllPostList(props) {
  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
      <div>{item.post}</div>
      <div>
        <button>upvote arrow</button>
        <span>5</span>
        <button>downvote arrow</button>
      </div>
    </li>
  ));
  return (
    <div>
      <NavBar />
      {posts}
    </div>
  );
}

// PostList.defaultProps = {
//   postlist: []
// };
const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    postlist: state.allPostData.allData
  };
};

export default connect(mapStateToProps)(AllPostList);
