import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, navigate);
  };

  return (
    <section className="container max-w-2xl mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-md">
      <h1 className="text-3xl font-bold text-primary-500 mb-2 flex items-center">
        <i className="fas fa-graduation-cap mr-2" />
        Add Education
      </h1>
      <p className="text-sm text-gray-400 mb-4">
        Add any degree, certification, or course you’ve completed
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="* School"
          name="school"
          value={school}
          onChange={onChange}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="* Degree or Certification"
          name="degree"
          value={degree}
          onChange={onChange}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Field of Study"
          name="fieldofstudy"
          value={fieldofstudy}
          onChange={onChange}
          className="form-input"
        />
        <div>
          <label className="text-sm block mb-1 text-gray-300">From Date</label>
          <input
            type="date"
            name="from"
            value={from}
            onChange={onChange}
            className="form-input"
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="current"
            checked={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
            className="accent-primary w-4 h-4"
          />
          <label className="text-gray-300">Current Program</label>
        </div>
        <div>
          <label className="text-sm block mb-1 text-gray-300">To Date</label>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={toDateDisabled}
            className="form-input"
          />
        </div>
        <textarea
          name="description"
          rows="4"
          placeholder="Program Description"
          value={description}
          onChange={onChange}
          className="form-textarea"
        ></textarea>
        <div className="flex gap-3 pt-3">
          <input type="submit" className="btn btn-primary" value="Submit" />
          <Link to="/dashboard" className="btn">
            Go Back
          </Link>
        </div>
      </form>
    </section>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
