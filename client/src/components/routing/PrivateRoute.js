import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner"; // optional: if you want a spinner while loading

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
  if (loading) {
    return <Spinner />; // You can show a spinner while checking auth state
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
