import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Landing({ isAuthenticated }) {
  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner text-center">
          <h1 className="x-large">DevConnector</h1>
          <p className="lead mb-6">
            Create a profile, showcase your work, connect with other developers
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
