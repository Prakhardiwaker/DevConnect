import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeComment } from "../../actions/post";
import { formatCommentDate } from "../../utils/dateFormat";

const CommentItem = ({
  postId,
  comment: { _id, name, text, avatar, user, date },
  auth,
  removeComment,
}) => {
  return (
    <div className="post flex gap-4 p-4 my-4 items-start">
      <div className="flex-shrink-0 text-center">
        <Link to={`/profile/${user}`}>
          <img
            className="round-img mx-auto mb-2"
            src={avatar}
            alt={`${name}'s avatar`}
          />
          <h4 className="text-sm text-gray-300">{name}</h4>
        </Link>
      </div>
      <div className="flex-grow">
        <p className="my-2 text-base leading-relaxed">{text}</p>
        <p className="text-sm text-gray-400">
          Posted on {formatCommentDate(date)}
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => removeComment(postId, _id)}
            type="button"
            className="btn btn-danger mt-2"
            aria-label="Delete Comment"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
