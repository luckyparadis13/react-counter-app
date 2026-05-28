function Projects() {
  const projects = [
    {
      name: "To-Do List App",
      description:
        "A fully functional to-do list with add, delete, and validation features.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/luckyparadis13/todo-app",
    },
    {
      name: "Quiz App",
      description:
        "An interactive quiz app with score tracking and multiple choice questions.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/luckyparadis13/quiz-app",
    },
    {
      name: "Weather App",
      description:
        "A real-time weather app that fetches live data from the OpenWeather API.",
      tech: "React, API, CSS",
      link: "https://github.com/luckyparadis13/weather-app",
    },
    {
      name: "React Counter",
      description:
        "A React counter app built with useState hook and conditional rendering.",
      tech: "React, JavaScript",
      link: "https://github.com/luckyparadis13/react-counter-app",
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Tech: {project.tech}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
