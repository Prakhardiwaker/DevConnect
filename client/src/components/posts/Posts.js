import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import { getPosts } from "../../actions/post";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) return <Spinner />;

  return (
    <section className="container">
      <h1 className="x-large text-primary text-center">Posts</h1>
      <p className="lead text-center mb-6">
        <i className="fas fa-user mr-2" /> Welcome to the community
      </p>
      <PostForm />
      <div className="space-y-6 mt-8">
        {posts.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        ) : (
          <p className="text-gray-400 text-center mt-4">No posts yet.</p>
        )}
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
