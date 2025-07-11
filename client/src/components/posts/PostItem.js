import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { formatPostDate } from "../../utils/dateFormat";

const PostItem = ({
  deletePost,
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div className="post glass-card p-4 mb-6 flex flex-col md:flex-row gap-6 items-start rounded-lg border border-glass-border shadow-sm">
      <div className="text-center md:w-1/5">
        <Link to={`/profile/${user}`}>
          <img
            className="round-img mx-auto mb-2"
            src={avatar}
            alt={`${name}'s avatar`}
          />
          <h4 className="font-semibold">{name}</h4>
        </Link>
      </div>
      <div className="flex-1">
        <p className="my-2 text-gray-100">{text}</p>
        <p className="text-sm text-gray-400 mb-4">
          Posted on {formatPostDate(date)}
        </p>

        {showActions && (
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => addLike(_id)}
              type="button"
              className="btn btn-light"
              aria-label="Like post"
            >
              <i className="fas fa-thumbs-up"></i>{" "}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>

            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn btn-light"
              aria-label="Unlike post"
            >
              <i className="fas fa-thumbs-down"></i>
            </button>

            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{" "}
              {comments.length > 0 && (
                <span className="ml-1">{comments.length}</span>
              )}
            </Link>

            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => deletePost(_id)}
                type="button"
                className="btn btn-danger"
                aria-label="Delete post"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
})(PostItem);
