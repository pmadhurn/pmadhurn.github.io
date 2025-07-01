// Placeholder for project image - ideally, you'd have a screenshot for each
// For now, a generic placeholder can be used or a colored block.
// SVGs for technology icons could also be nice.

const ProjectCard = ({ project }) => {
  const { title, description, technologies, githubLink, liveLink } = project;

  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 flex flex-col">
      {/* Placeholder for an image or visual representation */}
      {/* <img src="/path/to/image.jpg" alt={title} className="w-full h-48 object-cover"/> */}
      <div className="w-full h-48 bg-slate-700 flex items-center justify-center">
        <span className="text-slate-500 text-sm">(Project Visual Placeholder)</span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-4 flex-grow">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-700 text-cyan-300 px-2 py-1 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex space-x-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 border border-slate-600 hover:border-cyan-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 border border-slate-600 hover:border-cyan-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
