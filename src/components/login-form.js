import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validation";
import Topbar from "./top-bar";
import { Link, Redirect } from "react-router-dom";

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    console.log(this.props);
    return (
      <div className="container">
        <Topbar />
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <legend>Login</legend>
          <label htmlFor="username">Username: </label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="password">Password: </label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            validate={[required, nonEmpty]}
          />
          <button
            className="login-page-button"
            disabled={this.props.pristine || this.props.submitting}
          >
            Log in
          </button>
          <div className="forgot-pass">
            <Link to="/forgot">Forgot Password?</Link>
          </div>
          <div>
            <p>need to sign up?</p>
            <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
