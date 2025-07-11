import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <div className="flex justify-center items-center my-12">
    <img src={spinner} className="w-24 h-24" alt="Loading..." />
  </div>
);

export default Spinner;
