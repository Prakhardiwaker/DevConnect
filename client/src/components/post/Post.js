import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";
import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  if (loading || !post) {
    return <Spinner />;
  }

  return (
    <section className="container my-6">
      <Link to="/posts" className="btn mb-4 inline-flex items-center gap-1">
        <span className="text-lg">←</span> Back To Posts
      </Link>

      <PostItem post={post} showActions={false} />

      <div className="mt-8">
        <h2 className="large text-primary mb-4">Comments</h2>
        <CommentForm postId={post._id} />

        <div className="comments flex flex-col gap-6 mt-6">
          {post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))
          ) : (
            <p className="text-gray-400 italic">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
