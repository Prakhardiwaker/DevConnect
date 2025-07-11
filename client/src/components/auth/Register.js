import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

function Register({ setAlert, register, isAuthenticated }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container max-w-md my-16">
      <h1 className="large text-primary text-center">Sign Up</h1>
      <p className="lead text-center">
        <i className="fas fa-user mr-2"></i> Create your DevConnect profile
      </p>
      <form
        className="form bg-glass-bg border border-glass-border rounded-xl p-6 shadow-md backdrop-blur-md"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="w-full p-3 rounded bg-dark-700 text-gray-100 border border-glass-border focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="form-group mt-5">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full p-3 rounded bg-dark-700 text-gray-100 border border-glass-border focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <small className="form-text block mt-1 text-sm text-gray-400">
            This site uses Gravatar — use a Gravatar email to show a profile
            image.
          </small>
        </div>

        <div className="form-group mt-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onChange}
            required
            className="w-full p-3 rounded bg-dark-700 text-gray-100 border border-glass-border focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="form-group mt-5">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={onChange}
            required
            className="w-full p-3 rounded bg-dark-700 text-gray-100 border border-glass-border focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary mt-6 w-full"
          value="Register"
        />
      </form>

      <p className="mt-6 text-center text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-500 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
