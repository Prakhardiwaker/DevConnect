import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";
import { formatProfileDate } from "../../utils/dateFormat";

const Education = ({ education, deleteEducation }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-primary mb-4">
        Education Credentials
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="w-full text-sm text-left bg-dark-700 text-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-dark-600 text-gray-300 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">School</th>
              <th className="px-6 py-3 hidden sm:table-cell">Degree</th>
              <th className="px-6 py-3 hidden sm:table-cell">Years</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr
                key={edu._id}
                className="border-b border-dark-600 hover:bg-dark-600 transition"
              >
                <td className="px-6 py-4">{edu.school}</td>
                <td className="px-6 py-4 hidden sm:table-cell">{edu.degree}</td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  {formatProfileDate(edu.from)} -{" "}
                  {edu.to ? formatProfileDate(edu.to) : "Now"}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => deleteEducation(edu._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {education.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-400">
                  No education credentials added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
