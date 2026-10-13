
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("profile-card-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("profile-card-theme", theme);
    } catch {
      // App theme still works if browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <main className={`app ${theme}`}>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Developer Profile home">
          <span className="brand-icon">&lt;/&gt;</span>
          <span>DevProfile</span>
        </a>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <span aria-hidden="true">
            {theme === "light" ? "🌙" : "☀️"}
          </span>
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </header>

      <section className="profile-section" id="home">
        <p className="eyebrow">
          <span className="status-dot" />
          DEVELOPER PROFILE
        </p>

        <h1>Hi, I'm Kanhaiya Mishra</h1>
        <p className="page-subtitle">
          Building my future, one line of code at a time.
        </p>

        <ProfileCard
          name="Kanhaiya Mishra"
          role="BCA Student | Aspiring Web Developer"
          description="Aspiring Web Developer and BCA student passionate about building responsive, user-friendly web applications. Focused on frontend development, writing clean code, solving problems, and continuously improving my technical skills."
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Bootstrap",
            "Tailwind CSS",
            "Responsive Design",
            "Git",
            "GitHub",
          ]}
          github="https://github.com/kanhaiyamm55-cmd"
          linkedin="https://www.linkedin.com/in/kanhaiya-mishra-147518372/"
        />
      </section>

      <footer className="footer">
        <p>Designed and built with React by Kanhaiya Mishra</p>
      </footer>
    </main>
  );
}

export default App;
