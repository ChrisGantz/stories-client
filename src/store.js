import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadAuthToken } from "./local-storage";
import authReducer from "./reducers/auth";
import postDataReducer from "./reducers/posts";
import allPostDataReducer from "./reducers/all-posts";
import { setAuthToken, refreshAuthToken } from "./actions/auth";

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    postData: postDataReducer,
    allPostData: allPostDataReducer
  }),
  // what does this do??
  composeWithDevTools(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
