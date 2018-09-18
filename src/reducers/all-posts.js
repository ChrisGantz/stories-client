//reducer for all data
import {
  FETCH_ALL_POST_DATA_SUCCESS,
  FETCH_ALL_POST_DATA_ERROR,
  UPDATE_LIKES_DATA_SUCCESS,
  UPDATE_COMMENTS_DATA
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
  } else if (action.type === UPDATE_LIKES_DATA_SUCCESS) {
    console.log("THIS IS THE ACTION", action);
    return Object.assign({}, state, {
      allData: state.allData.map(post => {
        if (post.id === action.updatedPost.id) {
          return action.updatedPost;
        }
        return post;
      })
    });
  } else if (action.type === UPDATE_COMMENTS_DATA) {
    return Object.assign({}, state, {
      allData: state.allData.map(post => {
        if (post.id === action.updatedPost.id) {
          return action.updatedPost;
        }
        return post;
      })
    });
  }

  return state;
}
