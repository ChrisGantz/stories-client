import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../actions/users";
import { login } from "../actions/auth";
import Input from "./input";
import { Link, Redirect } from "react-router-dom";
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed,
  email
} from "../validation";
import Topbar from "./top-bar";
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class SignUp extends React.Component {
  onSubmit(values) {
    const { username, password, email } = values;
    const user = { username, password, email };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div className="container">
        <form
          className="sign-up-form"
          role="form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="email">Email: </label>
            <Field
              className="email"
              component={Input}
              placeholder="Youremail@gmail.com"
              type="email"
              name="email"
              validate={[required, nonEmpty, email]}
            />

            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
            />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
            />
            <button
              className="sign-up-login-button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Sign Up
            </button>
            <div className="need-sign-up-login">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(SignUp);
