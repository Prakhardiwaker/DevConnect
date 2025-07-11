import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText("");
  };

  return (
    <div className="post-form form my-6">
      <form
        className="form flex flex-col gap-y-4"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <textarea
          name="text"
          rows="5"
          placeholder="Leave a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="resize-none"
        />
        <input
          type="submit"
          className="btn btn-primary self-start"
          value="Submit"
          aria-label="Submit Comment"
        />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default connect(null, { addComment })(CommentForm);
