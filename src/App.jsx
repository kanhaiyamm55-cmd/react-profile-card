
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Switch color theme"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>My Developer Profile</h1>

      <p className="subtitle">
        Passionate about coding and building cool things.
      </p>

      <ProfileCard
        name="Kanhaiya Mishra"
        role="BCA Student | Web Developer"
        description="I am learning web development and building my coding skills."
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />

      <div className="profile-card actions">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Profile" : "View Profile"}
        </button>

        {showDetails && (
          <p className="description">
            I am learning React components, props, state, and GitHub.
          </p>
        )}

        <button
          className="like-button"
          onClick={() => setLikes((prev) => prev + 1)}
        >
          ❤️ Like {likes}
        </button>
      </div>
    </div>
  );
}

export default App;
