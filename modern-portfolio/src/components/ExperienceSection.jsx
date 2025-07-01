const experienceData = [
  {
    id: 1,
    title: "AI & Machine Learning Intern",
    institution: "Indus University (College Certified Internship)",
    duration: "Specify Duration, e.g., June 202X - Aug 202X", // Placeholder - Madhur to provide
    description: [
      "Completed a comprehensive college-certified internship focused on Artificial Intelligence and Machine Learning.",
      "Developed and trained prediction models utilizing the TensorFlow framework.",
      "Gained hands-on experience with various machine learning algorithms and data processing techniques.",
      "Explored and familiarized myself with the fundamentals and applications of Large Language Models (LLMs).",
      // Madhur: Add any other specific achievements or learnings here.
    ],
    technologies: ["TensorFlow", "Python", "Machine Learning", "Data Analysis", "LLMs"],
  },
  // Add more experiences if any in the future
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            My Experience
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            Professional roles and learning opportunities.
          </p>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="bg-slate-900 p-8 rounded-lg shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <h3 className="text-2xl font-semibold text-cyan-400">{exp.title}</h3>
                <p className="text-md text-slate-400 mt-1 sm:mt-0">{exp.duration}</p>
              </div>
              <p className="text-lg font-medium text-slate-200 mb-4">{exp.institution}</p>

              <ul className="list-disc list-inside space-y-2 mb-5 text-slate-300">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div>
                <h4 className="text-sm font-semibold text-slate-100 mb-2">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-cyan-300 px-2 py-1 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
