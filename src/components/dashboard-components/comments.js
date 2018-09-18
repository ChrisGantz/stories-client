import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { connect } from "react-redux";
import { required, nonEmpty } from "../../validation";
import { commentsData } from "../../actions/posts";

export class Comments extends React.Component {
  render() {
    return (
      <div>
        contain one post
        <label>Comment: </label>
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
          +Comment
        </button>
      </div>
    );
  }
}
export default reduxForm({
  form: "commenting",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("commenting", Object.keys(errors)[0]))
})(Comments);
