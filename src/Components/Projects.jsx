import './Project.css'

const Projects = () => {
  const projects = [
    {
      title: "Online Shoe Shopping Website",
      description: "An ecommerce website for shoe shopping. Currently working on integrating a database to store and manage inventory and user data.",
      technologies: "HTML, CSS, JavaScript, MySQL (planned)",
      status: "In Progress",
    },
    {
      title: "Library Management System",
      description: "A backend-focused project for library management, built using Python and MySQL. Features book inventory and user borrowing functionality.",
      technologies: "Python, MySQL",
      status: "Completed",
    },
    {
      title: "Note-Taking & Reminders App",
      description: "An app for Linux, Windows, and Android with a simple to-do list and checklist functionality. Starting with the Android version using Android Studio.",
      technologies: "Java, Android Studio",
      status: "In Progress",
    },
    {
      title: "Prediction Models with TensorFlow",
      description: "Built machine learning models for predictive analytics. Focused on utilizing TensorFlow for deep learning tasks.",
      technologies: "Python, TensorFlow",
      status: "Completed",
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>Status:</strong> {project.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
