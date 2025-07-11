import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import { formatProfileDate } from "../../utils/dateFormat";

const Experience = ({ experience, deleteExperience }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-primary mb-4">
        Experience Credentials
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="w-full text-sm text-left bg-dark-700 text-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-dark-600 text-gray-300 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3 hidden sm:table-cell">Title</th>
              <th className="px-6 py-3 hidden sm:table-cell">Years</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <tr
                  key={exp._id}
                  className="border-b border-dark-600 hover:bg-dark-600 transition"
                >
                  <td className="px-6 py-4">{exp.company}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    {exp.title}
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    {formatProfileDate(exp.from)} -{" "}
                    {exp.to ? formatProfileDate(exp.to) : "Now"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteExperience(exp._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-400">
                  No experience credentials added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
