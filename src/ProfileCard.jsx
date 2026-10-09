
function ProfileCard({ name, role, description, skills }) {
  return (
    <div className="profile-card">
      {/* Profile Photo */}
      <img
        src="/profile.jpeg"
        alt={name}
        className="avatar"
      />

      {/* Name */}
      <h2>{name}</h2>

      {/* Role */}
      <p className="role">{role}</p>

      {/* Description */}
      <p className="description">{description}</p>

      {/* Skills */}
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
