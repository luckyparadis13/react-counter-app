import "./App.css";

function App() {
  return (
    <div>
      <div className="name-banner">
        <h1>Elizabeth "Lucky" Culley</h1>
      </div>
      <div className="container">
        <aside className="sidebar">
          <div className="sidebar-content">
            <h2>Software Engineer</h2>
            <p>I build clean, user-focused web applications.</p>
            <nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
            </nav>
            <div className="social-links">
              <a
                href="https://github.com/luckyparadis13"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/elizabeth-lucky-culley"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
        <main className="main-content">
          <section id="about">
            <h3>About</h3>
            <p>
              Creative by nature, technical by choice. I spent 10+ years
              building things from the ground up — owning a salon, leading
              teams, and solving problems on the fly. Turns out, that's not so
              different from writing code.
            </p>
            <p>
              I graduated from FullStack Academy's Software Engineering Bootcamp
              in June 2025 and completed App Academy's AI Engineering &
              Intelligent Agents course in September 2025. I build responsive
              web applications using JavaScript, React, Node.js, Express, HTML,
              and CSS.
            </p>
          </section>
          <section id="projects">
            <h3>Projects</h3>
            <div className="card">
              <h2>Weather App</h2>
              <p>
                Real-time weather app that fetches live data from the
                OpenWeather API.
              </p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">API</span>
              <span className="tech-tag">CSS</span>
            </div>
            <div className="card">
              <h2>To-Do List App</h2>
              <p>
                Fully functional to-do list with add, delete, and validation
                features.
              </p>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
            </div>
            <div className="card">
              <h2>Quiz App</h2>
              <p>
                Interactive quiz app with score tracking and multiple choice
                questions.
              </p>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
            </div>
            <div className="card">
              <h2>React Counter</h2>
              <p>
                React counter app built with useState hook and conditional
                rendering.
              </p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </section>
          <section id="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <p>JavaScript</p>
              </div>
              <div className="skill-card">
                <p>React</p>
              </div>
              <div className="skill-card">
                <p>Node.js</p>
              </div>
              <div className="skill-card">
                <p>Express</p>
              </div>
              <div className="skill-card">
                <p>HTML & CSS</p>
              </div>
              <div className="skill-card">
                <p>Git & GitHub</p>
              </div>
              <div className="skill-card">
                <p>MongoDB</p>
              </div>
              <div className="skill-card">
                <p>PostgreSQL</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
