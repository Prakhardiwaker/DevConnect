import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addPost({ text });
      setText("");
    }
  };

  return (
    <div className="post-form glass-card p-6 rounded-lg shadow-md">
      <div className="bg-primary-500 text-black py-2 px-4 rounded-t-md">
        <h3 className="text-lg font-semibold">Say Something...</h3>
      </div>
      <form className="form mt-4" onSubmit={onSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="4"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="bg-dark-700 text-gray-100 border border-glass-border p-3 rounded w-full focus:outline-none"
        />
        <input
          type="submit"
          className="btn btn-primary mt-3"
          value="Post"
          aria-label="Submit post"
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
