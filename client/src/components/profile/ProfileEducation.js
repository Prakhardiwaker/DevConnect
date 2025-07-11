import React from "react";
import PropTypes from "prop-types";
import { formatProfileDate } from "../../utils/dateFormat";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => (
  <div className="bg-dark-700 border border-glass-border rounded-xl p-5 mb-4 shadow">
    <h3 className="text-lg text-white font-semibold mb-1">{school}</h3>
    <p className="text-sm text-gray-400 mb-3">
      {formatProfileDate(from)} - {to ? formatProfileDate(to) : "Now"}
    </p>

    {degree && (
      <p className="text-sm text-gray-300">
        <span className="font-medium text-gray-400">Degree:</span> {degree}
      </p>
    )}

    {fieldofstudy && (
      <p className="text-sm text-gray-300">
        <span className="font-medium text-gray-400">Field Of Study:</span>{" "}
        {fieldofstudy}
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

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
