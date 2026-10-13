
import { useState } from "react";

function ProfileCard({
  name,
  role,
  description,
  skills,
  github,
  linkedin,
}) {
  const [likes, setLikes] = useState(0);

  return (
    <article className="profile-card">
      <div className="card-top">
        <span className="card-label">MY PROFILE</span>
        <span className="availability">
          <span className="status-dot" />
          Learning & Growing
        </span>
      </div>

      <img
        className="profile-image"
        src="/profile.jpeg"
        alt={`${name} profile`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>

      <p className="profile-description">{description}</p>

      <div className="section-divider" />

      <section className="skills-section" aria-labelledby="skills-heading">
        <h3 id="skills-heading">Key Skills</h3>

        <div className="skills-list">
          {skills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="connect-section" aria-labelledby="connect-heading">
        <h3 id="connect-heading">Connect With Me</h3>

        <div className="social-links">
          <a
            className="social-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              GH
            </span>
            <span className="social-text">
              <strong>GitHub</strong>
              <small>View my projects</small>
            </span>
            <span className="external-icon" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="social-link"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon linkedin-icon" aria-hidden="true">
              in
            </span>
            <span className="social-text">
              <strong>LinkedIn</strong>
              <small>Connect with me</small>
            </span>
            <span className="external-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>

      <button
        className="like-button"
        type="button"
        onClick={() => setLikes((count) => count + 1)}
      >
        <span aria-hidden="true">♥</span>
        Like My Profile
        <span className="like-count">{likes}</span>
      </button>

      <p className="card-footer">Thanks for visiting my profile!</p>
    </article>
  );
}

export default ProfileCard;
