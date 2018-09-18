// //reducer for all data
// import {
//   UPDATE_LIKES_DATA_SUCCESS,
//   UPDATE_LIKES_DATA_ERROR
// } from "../actions/posts";

// const initialState = {
//   likes: 0,
//   total: 0,
//   error: null
// };

// export default function reducer(state = initialState, action) {
//   if (action.type === UPDATE_LIKES_DATA_SUCCESS) {
//     return Object.assign({}, state, {
//       likes: action.likes,
//       total: action.total,
//       error: null
//     });
//   } else if (action.type === UPDATE_LIKES_DATA_ERROR) {
//     return Object.assign({}, state, {
//       error: action.error
//     });
//   }
//   return state;
// }
