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

  if (loading || profile === null) return <Spinner />;

  const isOwner =
    auth.isAuthenticated && !auth.loading && auth.user._id === profile.user._id;

  return (
    <section className="container">
      <div className="flex justify-between items-center mb-6">
        <Link to="/profiles" className="btn btn-light">
          <i className="fas fa-arrow-left mr-1" />
          Back To Profiles
        </Link>

        {isOwner && (
          <Link to="/edit-profile" className="btn btn-primary">
            <i className="fas fa-user-edit mr-1" />
            Edit Profile
          </Link>
        )}
      </div>

      <div className="profile-grid space-y-6">
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />

        <div className="glass-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-primary text-xl font-semibold">Experience</h2>
            {isOwner && (
              <Link to="/add-experience" className="btn btn-light">
                <i className="fas fa-plus mr-1" />
                Add Experience
              </Link>
            )}
          </div>
          {profile.experience?.length > 0 ? (
            profile.experience.map((exp) => (
              <ProfileExperience key={exp._id} experience={exp} />
            ))
          ) : (
            <p className="text-gray-400">No experience credentials</p>
          )}
        </div>

        <div className="glass-card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-primary text-xl font-semibold">Education</h2>
            {isOwner && (
              <Link to="/add-education" className="btn btn-light">
                <i className="fas fa-plus mr-1" />
                Add Education
              </Link>
            )}
          </div>
          {profile.education?.length > 0 ? (
            profile.education.map((edu) => (
              <ProfileEducation key={edu._id} education={edu} />
            ))
          ) : (
            <p className="text-gray-400">No education credentials</p>
          )}
        </div>

        {profile.githubusername && (
          <ProfileGithub username={profile.githubusername} />
        )}
      </div>
    </section>
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
