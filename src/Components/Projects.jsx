import './Project.css';

const Projects = () => {
  const projects = [
    // Projects from your JSON snippet
    {
      title: "LMS (Library Management System)",
      description: "Command-line Library Management System",
      technologies: "Java",
      status: "Completed",
    },
    {
      title: "Library Management System (GUI)",
      description: "GUI-based Library Management System",
      technologies: "Python, Tkinter, MySQL",
      status: "Completed",
    },
    {
      title: "Banking Management System",
      description: "GUI-based Banking Management System",
      technologies: "Python, Tkinter, MySQL",
      status: "Completed",
    },
    {
      title: "Restaurant Management System",
      description: "GUI-based Restaurant Management System",
      technologies: "Python, Tkinter, MySQL",
      status: "Completed",
    },
    {
      title: "Telephone Directory",
      description: "GUI-based Telephone Directory",
      technologies: "Python, Tkinter, MySQL",
      status: "Completed",
    },
    {
      title: "Data Sharing App",
      description: "Application for sharing data using networking protocols.",
      technologies: "Python, Networking Protocols",
      status: "Completed",
    },
    {
      title: "Weather Website",
      description: "Website displaying weather information using OpenWeather API.",
      technologies: "OpenWeather API",
      status: "Completed",
    },
    {
      title: "Ball Catching Game",
      description: "Simple ball catching game.",
      technologies: "C",
      status: "Completed",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio website.",
      technologies: "MERN Stack",
      status: "Completed",
    },
    {
      title: "Smart Plant Pot",
      description: "Smart plant pot that monitors moisture levels and sends notifications.",
      technologies: "ESP32, WiFi",
      status: "Completed",
    },
    {
      title: "Calculator",
      description: "Calculator application for Android.",
      technologies: "Java, Android App Development",
      status: "Completed",
    },
    {
      title: "Heart Attack Prediction System",
      description:
        "Machine learning model for predicting heart attacks with 87.845% accuracy.",
      technologies: "Python, Machine Learning, Kaggle",
      status: "Completed",
    },
    {
      title: "Quadcopter",
      description: "Ongoing quadcopter project.",
      technologies: "N/A",
      status: "In Progress",
    },

    // Projects from your JSX snippet
    {
      title: "Online Shoe Shopping Website",
      description:
        "An ecommerce website for shoe shopping. Currently working on integrating a database to store and manage inventory and user data.",
      technologies: "HTML, CSS, JavaScript, MySQL (planned)",
      status: "In Progress",
    },
    {
      title: "Library Management System (Backend)",
      description:
        "A backend-focused project for library management, built using Python and MySQL. Features book inventory and user borrowing functionality.",
      technologies: "Python, MySQL",
      status: "Completed",
    },
    {
      title: "Note-Taking & Reminders App",
      description:
        "An app for Linux, Windows, and Android with a simple to-do list and checklist functionality. Starting with the Android version using Android Studio.",
      technologies: "Java, Android Studio",
      status: "In Progress",
    },
    {
      title: "Prediction Models with TensorFlow",
      description:
        "Built machine learning models for predictive analytics. Focused on utilizing TensorFlow for deep learning tasks.",
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
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p>
              <strong>Status:</strong> {project.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
