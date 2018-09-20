import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validation";
import { Link } from "react-router-dom";

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
    return (
      <div className="container">
        <form
          className="sign-up-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <fieldset>
            {error}
            <legend>Login</legend>
            <Field
              label="Username: "
              component={Input}
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
            <Field
              label="Password: "
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
            />
            <button
              className="sign-up-login-button"
              disabled={this.props.pristine || this.props.submitting}
            >
              Log in
            </button>
            <div className="forgot-pass">
              <Link className="link-login" to="/forgot">
                Forgot Password?
              </Link>
            </div>
            <div>
              <p className="need-sign-up-login">
                Don't have an account?{" "}
                <Link className="link-login" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
