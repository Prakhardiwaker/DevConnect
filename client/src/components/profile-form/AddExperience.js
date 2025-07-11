import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, navigate);
  };

  return (
    <section className="container max-w-2xl mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] backdrop-blur-lg shadow-md">
      <h1 className="text-3xl font-bold text-primary-500 mb-2 flex items-center">
        <i className="fas fa-briefcase mr-2" />
        Add An Experience
      </h1>
      <p className="text-sm text-gray-400 mb-3">
        Include past or current positions you've held in the dev world
      </p>
      <small className="text-sm text-gray-500 block mb-5">
        * = required field
      </small>

      <form className="space-y-4" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="* Job Title"
          name="title"
          value={title}
          onChange={onChange}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="* Company"
          name="company"
          value={company}
          onChange={onChange}
          required
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
        <div>
          <label className="block mb-1 text-sm text-gray-300">From Date</label>
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
          <label className="text-gray-300 text-sm">Current Job</label>
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-300">To Date</label>
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
          rows="5"
          placeholder="Job Description"
          value={description}
          onChange={onChange}
          className="form-textarea"
        ></textarea>
        <div className="flex gap-4 pt-3">
          <input type="submit" className="btn btn-primary" value="Submit" />
          <Link to="/dashboard" className="btn">
            Go Back
          </Link>
        </div>
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
