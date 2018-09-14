//reducer for all data
import {
  FETCH_ALL_POST_DATA_SUCCESS,
  FETCH_ALL_POST_DATA_ERROR,
  FETCH_LIKES_DATA_SUCCESS
} from "../actions/posts";
// dont forget to change allData in key and value below
const initialState = {
  allData: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_ALL_POST_DATA_SUCCESS) {
    return Object.assign({}, state, {
      allData: action.allData,
      error: null
    });
  } else if (action.type === FETCH_ALL_POST_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === FETCH_LIKES_DATA_SUCCESS) {
    return Object.assign({}, state, {
      allData: state.allData.map(post => {
        console.log(post.id, action.updatedPost.id);
        if (post.id === action.updatedPost.id) {
          console.log(action.updatedPost);
          return action.updatedPost;
        }
        return post;
      })
    });
  }
  return state;
}
