import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  if (loading) return <Spinner />;

  return (
    <section className="container py-6">
      <h1 className="text-4xl font-extrabold text-primary mb-2">Developers</h1>
      <p className="text-lg text-gray-400 mb-6 flex items-center gap-2">
        <i className="fab fa-connectdevelop text-primary text-xl" />
        Browse and connect with developers
      </p>

      {profiles.length > 0 ? (
        <div className="flex flex-col gap-4">
          {profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))}
        </div>
      ) : (
        <h4 className="text-gray-400 text-center mt-10 text-lg">
          No Profiles Found...
        </h4>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
