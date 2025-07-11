import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="flex gap-4 items-center text-sm sm:text-base">
      <li>
        <Link to="/profiles" className="hover:text-primary transition">
          Developers
        </Link>
      </li>
      <li>
        <Link to="/posts" className="hover:text-primary transition">
          Posts
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="hover:text-primary transition">
          <i className="fas fa-user mr-1" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
      </li>
      <li>
        <button
          onClick={logout}
          className="hover:text-danger transition bg-transparent border-none"
        >
          <i className="fas fa-sign-out-alt mr-1" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="flex gap-4 items-center text-sm sm:text-base">
      <li>
        <Link to="/profiles" className="hover:text-primary transition">
          Developers
        </Link>
      </li>
      <li>
        <Link to="/register" className="hover:text-primary transition">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="hover:text-primary transition">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar glass-card">
      <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-primary transition"
        >
          <i className="fas fa-code text-primary"></i> DevConnector
        </Link>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
