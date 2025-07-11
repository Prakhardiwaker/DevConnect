import React from "react";
import PropTypes from "prop-types";
import { formatProfileDate } from "../../utils/dateFormat";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div className="bg-dark-700 border border-glass-border rounded-xl p-5 mb-4 shadow">
    <h3 className="text-lg text-white font-semibold mb-1">{company}</h3>
    <p className="text-sm text-gray-400 mb-3">
      {formatProfileDate(from)} - {to ? formatProfileDate(to) : "Now"}
    </p>

    <p className="text-sm text-gray-300">
      <span className="font-medium text-gray-400">Position:</span> {title}
    </p>

    {location && (
      <p className="text-sm text-gray-300">
        <span className="font-medium text-gray-400">Location:</span> {location}
      </p>
    )}

    {description && (
      <p className="text-sm text-gray-300 mt-2">
        <span className="font-medium text-gray-400">Description:</span>{" "}
        {description}
      </p>
    )}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
