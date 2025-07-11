import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import DashboardActions from "./DashboardActions";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = ({
  deleteAccount,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading, profileFetched },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (!profileFetched) return <Spinner />;

  return (
    <section className="container max-w-5xl my-16">
      <h1 className="large text-primary text-center">Dashboard</h1>
      <p className="lead text-center mb-6">
        <i className="fas fa-user mr-2" />
        Welcome, <strong>{user && user.name}</strong>
      </p>

      {profile && Object.keys(profile).length > 0 ? (
        <>
          <DashboardActions />

          <div className="my-10">
            <Experience experience={profile.experience} />
          </div>

          <div className="my-10">
            <Education education={profile.education} />
          </div>

          <div className="text-center mt-10">
            <button
              className="btn btn-danger inline-flex items-center gap-2"
              onClick={deleteAccount}
            >
              <i className="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">
            You have not yet set up a profile. Please add some info.
          </p>
          <Link to="/create-profile" className="btn btn-primary">
            Create Profile
          </Link>
        </div>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
