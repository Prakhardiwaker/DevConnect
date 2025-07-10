import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import { getProfileById } from "../../actions/profile";
import { Link, useParams } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  if (loading || profile === null) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/profiles" className="btn btn-light">
        Back To Profiles
      </Link>

      {auth.isAuthenticated &&
        !auth.loading &&
        auth.user._id === profile.user._id && (
          <Link to="/edit-profile" className="btn btn-dark">
            Edit Profile
          </Link>
        )}

      <div className="profile-grid my-1">
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />

        {/* Experience Section */}
        <div className="profile-exp bg-white p-2">
          <div className="d-flex justify-between align-center mb-1">
            <h2 className="text-primary">Experience</h2>
            {auth.isAuthenticated &&
              !auth.loading &&
              auth.user._id === profile.user._id && (
                <Link to="/add-experience" className="btn btn-light">
                  <i className="fas fa-plus"></i> Add Experience
                </Link>
              )}
          </div>

          {profile.experience && profile.experience.length > 0 ? (
            profile.experience.map((experience) => (
              <ProfileExperience key={experience._id} experience={experience} />
            ))
          ) : (
            <h4>No experience credentials</h4>
          )}
        </div>

        {/* Education Section */}
        <div className="profile-edu bg-white p-2">
          <div className="d-flex justify-between align-center mb-1">
            <h2 className="text-primary">Education</h2>
            {auth.isAuthenticated &&
              !auth.loading &&
              auth.user._id === profile.user._id && (
                <Link to="/add-education" className="btn btn-light">
                  <i className="fas fa-plus"></i> Add Education
                </Link>
              )}
          </div>

          {profile.education && profile.education.length > 0 ? (
            profile.education.map((education) => (
              <ProfileEducation key={education._id} education={education} />
            ))
          ) : (
            <h4>No education credentials</h4>
          )}
        </div>
        {profile.githubusername && (
          <ProfileGithub username={profile.githubusername} />
        )}
      </div>
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
