import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    githubusername: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  useEffect(() => {
    if (profile) {
      setFormData({
        company: loading || !profile.company ? "" : profile.company,
        website: loading || !profile.website ? "" : profile.website,
        location: loading || !profile.location ? "" : profile.location,
        status: loading || !profile.status ? "" : profile.status,
        skills: loading || !profile.skills ? "" : profile.skills.join(","),
        bio: loading || !profile.bio ? "" : profile.bio,
        githubusername:
          loading || !profile.githubusername ? "" : profile.githubusername,
        twitter:
          loading || !profile.social?.twitter ? "" : profile.social.twitter,
        facebook:
          loading || !profile.social?.facebook ? "" : profile.social.facebook,
        linkedin:
          loading || !profile.social?.linkedin ? "" : profile.social.linkedin,
        youtube:
          loading || !profile.social?.youtube ? "" : profile.social.youtube,
        instagram:
          loading || !profile.social?.instagram ? "" : profile.social.instagram,
      });
    }
  }, [loading, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, true); // true = edit mode
  };

  return (
    <section className="container max-w-3xl mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-md text-white">
      <h1 className="text-3xl font-bold text-primary mb-2 flex items-center">
        <i className="fas fa-user-edit mr-2" />
        Edit Your Profile
      </h1>
      <p className="text-sm text-gray-400 mb-3">
        Update your profile information to keep it fresh and relevant
      </p>
      <small className="text-sm text-gray-500 block mb-5">
        * = required field
      </small>

      <form className="space-y-4" onSubmit={onSubmit}>
        <select
          name="status"
          value={status}
          onChange={onChange}
          className="form-input"
          required
        >
          <option value="0">* Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={onChange}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Website"
          name="website"
          value={website}
          onChange={onChange}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={onChange}
          className="form-input"
        />
        <input
          type="text"
          placeholder="* Skills (comma separated)"
          name="skills"
          value={skills}
          onChange={onChange}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="GitHub Username"
          name="githubusername"
          value={githubusername}
          onChange={onChange}
          className="form-input"
        />
        <textarea
          placeholder="A short bio of yourself"
          name="bio"
          value={bio}
          onChange={onChange}
          className="form-textarea"
          rows="5"
        ></textarea>

        <div className="my-4">
          <button
            type="button"
            className="btn"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            {displaySocialInputs ? "Hide Social Links" : "Add Social Links"}
          </button>
          <span className="ml-2 text-sm text-gray-400">Optional</span>
        </div>

        {displaySocialInputs && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Twitter URL"
              name="twitter"
              value={twitter}
              onChange={onChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Facebook URL"
              name="facebook"
              value={facebook}
              onChange={onChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="YouTube URL"
              name="youtube"
              value={youtube}
              onChange={onChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="LinkedIn URL"
              name="linkedin"
              value={linkedin}
              onChange={onChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Instagram URL"
              name="instagram"
              value={instagram}
              onChange={onChange}
              className="form-input"
            />
          </div>
        )}

        <div className="flex gap-4 pt-3">
          <input
            type="submit"
            className="btn btn-primary"
            value="Save Profile"
          />
          <Link to="/dashboard" className="btn">
            Go Back
          </Link>
        </div>
      </form>
    </section>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
