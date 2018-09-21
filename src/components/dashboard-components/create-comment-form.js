import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { required, nonEmpty } from "../../validation";
import { addCommentsData } from "../../actions/posts";

export class CommentForm extends React.Component {
  onSubmit(values) {
    const comment = values.post;
    // console.log(comment);
    const postId = this.props.id;
    // console.log(postId);

    this.props.dispatch(addCommentsData(postId, comment));
  }

  render() {
    return (
      <form
        className="comment-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label>Comment: </label>
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
          Comment
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "comments",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("comments", Object.keys(errors)[0]))
})(CommentForm);
