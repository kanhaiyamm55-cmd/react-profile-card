
function ProfileCard({
  name,
  role,
  description,
  skills = [],
  likes = 0,
  onLike,
}) {
  return (
    <article className="profile-card">
      <div className="card-top">
        <span className="profile-badge">
          ✨ DEVELOPER PROFILE
        </span>
        <span className="online-status">
          <span className="status-dot" />
          Learning
        </span>
      </div>

      <div className="avatar-wrapper">
        <div className="avatar">
          KM
        </div>
        <span className="avatar-check" title="Developer profile">
          ✓
        </span>
      </div>

      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      <p className="profile-description">{description}</p>

      <div className="divider" />

      <div className="skills-section">
        <h3>TECHNOLOGIES I'M LEARNING</h3>
        <div className="skills-list">
          {skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="profile-card-footer">
        <button
          className="like-button"
          onClick={onLike}
          aria-label={`Like profile, ${likes} likes`}
        >
          <span>♥</span>
          <span>Like</span>
          <span className="like-count">{likes}</span>
        </button>

        <span className="built-with">
          Built with <strong>React</strong>
        </span>
      </div>
    </article>
  );
}

export default ProfileCard;
