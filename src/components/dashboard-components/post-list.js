import React from "react";
import { connect } from "react-redux";

export function PostList(props) {
  const posts = props.postlist.map(item => (
    <li className="post-item" key={item.id}>
    <div className="vote-delete-container">
      <div className="vote-container">
        <button className="like-button">
          <span className="fa fa-thumbs-up" />
        </button>
        <span className="like-counter">{item.likes}</span>
        <button className="dislike-button">
          <span className="fa fa-thumbs-down" />
        </button>
      </div>
        <div className="delete-post-button">
          <button className="button-style" onClick={() => {
            props.getId(item.id)
            props.askDeletePopUp()
            }} >DELETE</button>
      </div>
    </div>
      <div className="just-post">{item.post}</div>
      {/* <button className="comment-button">
        <Link className="link" to="/comments">
          <i className="far fa-comment-alt" /> Comments
        </Link>
      </button> */}
    </li>
  ));
  return <div className="my-post-list">{posts}</div>;
}

const mapStateToProps = (state) => {
  return {
    postlist: state.postData.data
  };
};

export default connect(mapStateToProps)(PostList);
