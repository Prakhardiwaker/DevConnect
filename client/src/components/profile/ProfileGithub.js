import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";
import Spinner from "../layouts/Spinner";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold text-accent mb-3">
        GitHub Repositories
      </h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div
            key={repo._id}
            className="bg-dark-700 border border-glass-border rounded-xl p-5 mb-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-primary">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {repo.name}
                </a>
              </h4>
              {repo.description && (
                <p className="text-sm text-gray-400">{repo.description}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 text-sm mt-2">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-medium">
                ⭐ Stars: {repo.stargazers_count}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 font-medium">
                👀 Watchers: {repo.watchers_count}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-black font-medium">
                🍴 Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
