import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { userPost } from "../../actions/posts";
import { required, nonEmpty } from "../../validation";
import { Link, Redirect } from "react-router-dom";

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
      return <Redirect to="/Dashboard" />;
    }
    return (
      <div>
        <h2>Post</h2>
        <form
          className="post-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="user-post">Have a great story? Post it here!</label>
          <Field
            component="textarea"
            type="text"
            name="post"
            validate={[required, nonEmpty]}
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            POST
          </button>
        </form>
        <span className="go-back">
          <Link to="/Dashboard">Back</Link>
        </span>
      </div>
    );
  }
}

export default reduxForm({
  form: "posting",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("posting", Object.keys(errors)[0]))
})(PostForm);
