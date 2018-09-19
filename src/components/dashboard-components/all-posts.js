import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./nav-bar";
import { likesData, dislikesData, allUsersData } from "../../actions/posts";

export class AllPostList extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    // this.props.dispatch(userData());
    this.props.dispatch(allUsersData());
  }
  render() {
    const like = id => {
      console.log("in like");
      this.props.dispatch(likesData(id));
    };
    const dislike = id => {
      console.log("in dislike");
      this.props.dispatch(dislikesData(id));
    };
    // <span className="fa fa-thumbs-up" />
    const posts = this.props.postlist.map(item => (
      <li className="post-item" key={item.id}>
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
          <Link className="link" to="/comments">
            <i className="far fa-comment-alt" /> Comments
          </Link>
        </button>
      </li>
    ));
    return (
      <div>
        <NavBar />
        <div className="my-post-list">{posts}</div>
      </div>
    );
  }
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
