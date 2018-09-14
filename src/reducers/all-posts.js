//reducer for all data
import {
  FETCH_ALL_POST_DATA_SUCCESS,
  FETCH_ALL_POST_DATA_ERROR
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
  }
  return state;
}
