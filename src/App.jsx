
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("profile-card-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "profile-card-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <main className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">K</span>
          <span>My Portfolio</span>
        </a>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode((current) => !current)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={darkMode}
        >
          <span>{darkMode ? "☀️" : "🌙"}</span>
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="status-dot" />
            AVAILABLE TO LEARN & COLLABORATE
          </span>

          <h1>
            My Developer
            <span className="gradient-text"> Profile</span>
          </h1>

          <p className="subtitle">
            Passionate about coding, creating beautiful websites,
            and turning ideas into reality.
          </p>
        </div>

        <ProfileCard
          name="Kanhaiya Mishra"
          role="BCA Student | Web Developer"
          description="I am learning web development and building my coding skills by creating practical projects with modern web technologies."
          skills={["HTML", "CSS", "JavaScript", "React"]}
          likes={likes}
          onLike={() => setLikes((count) => count + 1)}
        />

        <section className="details-card">
          <div className="details-heading">
            <div>
              <span className="section-label">A LITTLE ABOUT ME</span>
              <h2>My Developer Journey</h2>
            </div>
            <span className="journey-icon">{"</>"}</span>
          </div>

          <p className="details-intro">
            I enjoy learning new technologies, solving problems,
            and improving my development skills one project at a time.
          </p>

          <button
            className="primary-button details-button"
            onClick={() => setShowDetails((visible) => !visible)}
            aria-expanded={showDetails}
          >
            {showDetails ? "Hide Details" : "View Profile Details"}
            <span>{showDetails ? "↑" : "→"}</span>
          </button>

          {showDetails && (
            <div className="extra-details">
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <h3>Education</h3>
                  <p>Bachelor of Computer Applications (BCA)</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">💻</span>
                <div>
                  <h3>Current Focus</h3>
                  <p>React, responsive UI, Git and GitHub</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">🚀</span>
                <div>
                  <h3>My Goal</h3>
                  <p>Build useful projects and grow as a web developer.</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="connect-section">
          <span className="section-label">LET'S CONNECT</span>
          <h2>Find me online</h2>
          <p>Explore my work or connect with me professionally.</p>

          <div className="social-links">
            <a
              className="social-link github-link"
              href="https://github.com/kanhaiyamm55-cmd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">GH</span>
              <span>
                <strong>GitHub</strong>
                <small>Explore my projects</small>
              </span>
              <span className="external-arrow">↗</span>
            </a>

            <a
              className="social-link linkedin-link"
              href="https://www.linkedin.com/in/kanhaiya-mishra-147518372/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">in</span>
              <span>
                <strong>LinkedIn</strong>
                <small>Connect professionally</small>
              </span>
              <span className="external-arrow">↗</span>
            </a>
          </div>
        </section>
      </section>

      <footer className="footer">
        <p>
          Designed and built with <span>♥</span> by Kanhaiya Mishra
        </p>
        <p>© {new Date().getFullYear()} · React Developer Profile Card</p>
      </footer>
    </main>
  );
}

export default App;
