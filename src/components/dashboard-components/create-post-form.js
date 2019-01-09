import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { userPost } from "../../actions/posts";
import { required, nonEmpty } from "../../validation";
import { Link, Redirect } from "react-router-dom";
import requiresLogin from "../requires-login";
import { connect } from "react-redux";

export class PostForm extends React.Component {
  state = { formSubmitted: false };
  onSubmit(values) {
    const { post } = values;
    this.props
      .dispatch(userPost(post))
      .then(() => this.setState({ formSubmitted: true }));
  }

  render() {
    if (this.state.formSubmitted) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <form
          className="post-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <legend>Post</legend>
          <label htmlFor="user-post">Have a great story? Post it here!</label>
          <Field
            className="comment-input"
            component="textarea"
            type="text"
            name="post"
            validate={[required, nonEmpty]}
          />
          <button
            className="add-comment-button"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            POST
          </button>
          <Link className="link style-links" to="/dashboard">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const createPostForm = reduxForm({
  form: "posting",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("posting", Object.keys(errors)[0]))
})(PostForm);

export default requiresLogin()(connect()(createPostForm));
