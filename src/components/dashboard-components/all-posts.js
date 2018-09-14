import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBar from "./nav-bar";
import { likesData } from "../../actions/posts";

export function AllPostList(props) {
  console.log("func props allpost", props);
  const like = id => {
    console.log("in like");
    props.dispatch(likesData(id));
  };

  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
      <div>{item.post}</div>
      <div>
        <button onClick={() => like(item.id)}>^</button>
        <span>{item.likes}</span>
        <button>v</button>
      </div>
    </li>
  ));
  console.log(props.postlist);
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
  return {
    postlist: state.allPostData.allData
  };
};

export default connect(mapStateToProps)(AllPostList);
