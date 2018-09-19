// export class AllPostList extends React.Component {
//   componentDidMount() {
//     // this.props.dispatch(fetchProtectedData());
//     this.props.dispatch(userData());
//     this.props.dispatch(allUsersData());
//   }
//   render() {
//     const like = id => {
//       console.log("in like");
//       this.props.dispatch(likesData(id));
//     };
//     const dislike = id => {
//       console.log("in like");
//       this.props.dispatch(dislikesData(id));
//     };

//     const posts = this.props.postlist.map(item => (
//       <li className="post-item" key={item.id}>
//         <div className="vote-container">
//           <button
//             className="like-button fa fa-thumbs-up"
//             onClick={() => like(item.id)}
//           />
//           <span className="like-counter">{item.likes}</span>
//           <button
//             className="dislike-button fa fa-thumbs-down"
//             onClick={() => dislike(item.id)}
//           />
//         </div>
//         <div className="just-post">{item.post}</div>
//         <button className="comment-button">
//           <Link className="link" to="/comments">
//             <i className="far fa-comment-alt" /> Comments
//           </Link>
//         </button>
//       </li>
//     ));
//     return (
//       <div>
//         <NavBar />
//         <div className="my-post-list">{posts}</div>
//       </div>
//     );
//   }
// }

// // PostList.defaultProps = {
// //   postlist: []
// // };
// const mapStateToProps = (state, props) => {
//   return {
//     postlist: state.allPostData.allData
//   };
// };

// export default connect(mapStateToProps)(AllPostList);

// export function AllPostList(props) {
//   const like = id => {
//     console.log("in like");
//     props.dispatch(likesData(id));
//   };
//   const dislike = id => {
//     console.log("in like");
//     props.dispatch(dislikesData(id));
//   };

//   const posts = props.postlist.map(item => (
//     <li className="post-item" key={item.id}>
//       <div className="vote-container">
//         <button
//           className="like-button fa fa-thumbs-up"
//           onClick={() => like(item.id)}
//         />
//         <span className="like-counter">{item.likes}</span>
//         <button
//           className="dislike-button fa fa-thumbs-down"
//           onClick={() => dislike(item.id)}
//         />
//       </div>
//       <div className="just-post">{item.post}</div>
//       <button className="comment-button">
//         <Link className="link" to="/comments">
//           <i className="far fa-comment-alt" /> Comments
//         </Link>
//       </button>
//     </li>
//   ));
//   return (
//     <div>
//       <NavBar />
//       <div className="my-post-list">{posts}</div>
//     </div>
//   );
// }

// // PostList.defaultProps = {
// //   postlist: []
// // };
// const mapStateToProps = (state, props) => {
//   return {
//     postlist: state.allPostData.allData
//   };
// };

// export default connect(mapStateToProps)(AllPostList);
