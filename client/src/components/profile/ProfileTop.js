import React from "react";
import PropTypes from "prop-types";

const normalizeUrl = (url) => {
  if (!url) return "#";
  return url.startsWith("http") ? url : `https://${url}`;
};

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top glass-primary rounded-xl p-6 text-center shadow-md">
      <img
        className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-accent shadow"
        src={avatar}
        alt={name}
      />
      <h1 className="text-2xl font-bold text-white">{name}</h1>
      <p className="text-lg text-gray-300 mt-1">
        {status} {company && <span className="text-accent">at {company}</span>}
      </p>
      {location && <p className="text-gray-400">{location}</p>}

      <div className="flex justify-center gap-5 mt-4 flex-wrap">
        {website && (
          <a
            href={normalizeUrl(website)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-transform transform hover:scale-110"
          >
            <i className="fas fa-globe fa-2x"></i>
          </a>
        )}
        {social &&
          Object.entries(social).map(
            ([key, value]) =>
              value && (
                <a
                  key={key}
                  href={normalizeUrl(value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-transform transform hover:scale-110"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              )
          )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
