import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Shoe Website",
    description: "A full-stack e-commerce platform for shoes, designed with future database integration for inventory, users, and orders.",
    technologies: ["MERN Stack (React, Node.js, Express.js)", "MongoDB (planned)"],
    githubLink: "#", // Placeholder
    liveLink: null, // Placeholder
  },
  {
    id: 2,
    title: "Note-taking & Reminders App",
    description: "An Android application for creating and managing notes and reminders. Currently in development with plans for iOS support.",
    technologies: ["Android Studio", "Java", "SQLite (likely)"],
    githubLink: "#", // Placeholder
    liveLink: null,
  },
  {
    id: 3,
    title: "SpeakInsights",
    description: "An AI-powered platform that transcribes meeting audio and generates actionable insights using advanced language models.",
    technologies: ["Python", "AI/ML", "Speech-to-Text APIs", "LLMs"],
    githubLink: "#", // Placeholder
    liveLink: null,
  },
  {
    id: 4,
    title: "Library Management System",
    description: "A desktop application for managing library inventory, member checkouts, and returns, built with Python and MySQL.",
    technologies: ["Python", "MySQL", "Tkinter (likely for GUI)"],
    githubLink: "#", // Placeholder
    liveLink: null,
  },
  {
    id: 5,
    title: "ESP32 Drone Control App",
    description: "An Android application featuring a dual D-pad user interface to control an ESP32-based drone via Bluetooth/Wi-Fi.",
    technologies: ["Android Studio", "Java", "ESP32", "Bluetooth/Wi-Fi Comms"],
    githubLink: "#", // Placeholder
    liveLink: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            Here are some of the projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
