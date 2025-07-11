import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="bg-dark-700 rounded-xl border border-glass-border p-6 shadow">
      {bio && (
        <div className="mb-6">
          <h2 className="text-primary text-xl font-semibold mb-2">
            {name.split(" ")[0]}'s Bio
          </h2>
          <p className="text-gray-300 leading-relaxed">{bio}</p>
          <div className="border-t border-gray-600 mt-4" />
        </div>
      )}

      <h2 className="text-primary text-xl font-semibold mb-3">Skill Set</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-3 py-1 bg-dark-600 border border-glass-border rounded-full text-sm text-gray-200 shadow-sm"
          >
            <i className="fas fa-check text-accent" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
