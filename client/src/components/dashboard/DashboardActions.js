import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      <Link
        to="/edit-profile"
        className="btn btn-light flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fas fa-user-circle text-primary-500"></i> Edit Profile
      </Link>
      <Link
        to="/add-experience"
        className="btn btn-light flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fab fa-black-tie text-primary-500"></i> Add Experience
      </Link>
      <Link
        to="/add-education"
        className="btn btn-light flex items-center gap-2 w-full sm:w-auto justify-center"
      >
        <i className="fas fa-graduation-cap text-primary-500"></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
