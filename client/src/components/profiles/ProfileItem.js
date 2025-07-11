import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="glass-card flex flex-col sm:flex-row items-center sm:items-start justify-between p-5 mb-5 rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.015]">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-20 h-20 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <p className="text-gray-300 text-sm">
            {status}
            {company && <span className="text-gray-400"> at {company}</span>}
          </p>
          {location && <p className="text-xs text-gray-500 mt-1">{location}</p>}
          <Link
            to={`/profile/${_id}`}
            className="btn-primary inline-block mt-3 text-sm"
          >
            View Profile
          </Link>
        </div>
      </div>

      <ul className="mt-5 sm:mt-0 sm:ml-auto grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm text-primary font-medium">
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-success mr-2" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
