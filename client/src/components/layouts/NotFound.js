import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="container text-center mt-24">
      <h1 className="x-large text-primary mb-2">
        <i className="fas fa-exclamation-triangle"></i> Page Not Found
      </h1>
      <p className="large mb-4">Sorry, this page does not exist</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </section>
  );
};
