const skillsData = [
  {
    category: "Programming Languages",
    items: ["Python (Certified)", "C", "C++", "Java", "JavaScript (MERN)"],
  },
  {
    category: "Web Development",
    items: ["MERN Stack (MongoDB, Express.js, React, Node.js)", "Personal Portfolio on Vercel"],
  },
  {
    category: "Mobile App Development",
    items: ["Android Studio (Java)", "Intents (including Implicit Intent)"],
  },
  {
    category: "AI/ML & Data Science",
    items: ["TensorFlow (Prediction Models)", "Large Language Models (LLMs)", "AI/ML Internship Experience"],
  },
  {
    category: "Databases",
    items: ["MySQL (e.g., Library Management System)", "SQLite"],
  },
  {
    category: "Mathematics",
    items: ["Differential Equations", "Linear Algebra", "General Math"],
  },
  {
    category: "Tools & Technologies",
    items: ["VS Code", "PowerShell", "GitHub", "Docker", "FFMPEG", "Tinkercad"],
  },
  {
    category: "Operating Systems",
    items: ["Dual-boot Ubuntu & Windows", "Kali Linux Experience"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            A look at the technologies and concepts I'm proficient with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-slate-900 p-6 rounded-lg shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((item) => (
                  <li key={item} className="text-slate-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
