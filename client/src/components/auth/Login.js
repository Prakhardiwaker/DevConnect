import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

function Login({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container max-w-md my-16">
      <h1 className="large text-primary text-center">Sign In</h1>
      <p className="lead text-center">
        <i className="fas fa-user mr-2"></i> Access your account securely
      </p>
      <form
        className="form bg-glass-bg border border-glass-border rounded-xl p-6 shadow-md backdrop-blur-md"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full p-3 rounded bg-dark-700 text-gray-100 border border-glass-border focus:outline-none focus:ring-2 focus:ring-primary-500"
            autoFocus
          />
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
        <input
          type="submit"
          className="btn btn-primary mt-6 w-full"
          value="Login"
        />
      </form>
      <p className="mt-6 text-center text-gray-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
