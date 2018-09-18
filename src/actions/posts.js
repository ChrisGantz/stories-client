import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import { stringify } from "querystring";
// GET ONLY USER DATA********************************************************
export const FETCH_POST_DATA_SUCCESS = "FETCH_POST_DATA_SUCCESS";
export const fetchPostDataSuccess = data => ({
  type: FETCH_POST_DATA_SUCCESS,
  data
});

export const FETCH_POST_DATA_ERROR = "FETCH_POST_DATA_ERROR";
export const fetchPostDataError = error => ({
  type: FETCH_POST_DATA_ERROR,
  error
});
// GET ALL USERS DATA*********************************************************
export const FETCH_ALL_POST_DATA_SUCCESS = "FETCH_ALL_POST_DATA_SUCCESS";
export const fetchAllPostDataSuccess = allData => ({
  type: FETCH_ALL_POST_DATA_SUCCESS,
  allData
});
export const FETCH_ALL_POST_DATA_ERROR = "FETCH_ALL_POST_DATA_ERROR";
export const fetchAllPostDataError = error => ({
  type: FETCH_ALL_POST_DATA_ERROR,
  error
});

// PUT TO LIKES DATA IN POST***************************************************
export const UPDATE_LIKES_DATA_SUCCESS = "UPDATE_LIKES_DATA_SUCCESS";
export const updateLikesDataSuccess = updatedPost => ({
  type: UPDATE_LIKES_DATA_SUCCESS,
  updatedPost
});

export const UPDATE_LIKES_DATA_ERROR = "UPDATE_LIKES_DATA_ERROR";
export const updateLikesDataError = error => ({
  type: UPDATE_LIKES_DATA_ERROR,
  error
});

// PUT FOR COMMENTS
export const UPDATE_COMMENTS_DATA = "UPDATE_COMMENTS_DATA";
export const updateCommentsData = updateComments => ({
  type: UPDATE_COMMENTS_DATA,
  updateComments
});
export const UPDATE_COMMENTS_DATA_ERROR = "UPDATE_COMMENTS_DATA_ERROR";
export const updateCommentsDataError = error => ({
  type: UPDATE_COMMENTS_DATA_ERROR,
  error
});

// Post to db******************
export const userPost = post => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log("at user post", post);
  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ post })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      // console.log(err);
    });
};
// grab post only for that user*******
export const userData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchPostDataSuccess(data)))
    .catch(err => {
      dispatch(fetchPostDataError(err));
    });
};

// Need to create a new reducer for this GET ALL DATA*********
export const allUsersData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts/all`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchAllPostDataSuccess(data)))
    .catch(err => {
      dispatch(fetchAllPostDataError(err));
    });
};

// Put to change likes in state*****************
export const likesData = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts/likes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(updateLikesDataSuccess(data));
    })
    .catch(err => {
      dispatch(updateLikesDataError(err));
    });
};
// Put to change likes in state*****************
export const dislikesData = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts/dislikes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(updateLikesDataSuccess(data));
    })
    .catch(err => {
      dispatch(updateLikesDataError(err));
    });
};
// Put to change comment in state*****************
export const commentsData = (id, comments) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/posts/comments/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ comments })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(updateCommentsData(data));
    })
    .catch(err => {
      dispatch(updateCommentsDataError(err));
    });
};
