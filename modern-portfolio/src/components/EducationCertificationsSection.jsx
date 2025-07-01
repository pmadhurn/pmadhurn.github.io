const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indus University, Ahmedabad",
    duration: "Expected Graduation: 2026",
    description: "Pursuing a comprehensive curriculum covering core computer science fundamentals, software development, and specialized engineering topics.",
  },
];

const certificationsData = [
  {
    id: 1,
    name: "Python Programming",
    issuer: "Palak Gandhi Academy",
    date: "Specify Date if known", // Placeholder - Madhur to provide
    description: "Completed a certification course covering fundamental and advanced concepts in Python programming.",
  },
];

const EducationCertificationsSection = () => {
  return (
    <section id="education-certifications" className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Education & Certifications
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            My academic background and qualifications.
          </p>
        </div>

        {/* Education Part */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8 text-center sm:text-left">Education</h3>
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-slate-800 p-6 rounded-lg shadow-xl mb-6 transition-shadow duration-300 hover:shadow-cyan-500/20">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                <p className="text-md text-slate-400 mt-1 sm:mt-0">{edu.duration}</p>
              </div>
              <p className="text-lg text-cyan-300 mb-3">{edu.institution}</p>
              <p className="text-slate-300">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Part */}
        <div>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8 text-center sm:text-left">Certifications</h3>
          {certificationsData.map((cert) => (
            <div key={cert.id} className="bg-slate-800 p-6 rounded-lg shadow-xl mb-6 transition-shadow duration-300 hover:shadow-cyan-500/20">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h4 className="text-xl font-bold text-slate-100">{cert.name}</h4>
                <p className="text-md text-slate-400 mt-1 sm:mt-0">{cert.date}</p>
              </div>
              <p className="text-lg text-cyan-300 mb-3">{cert.issuer}</p>
              <p className="text-slate-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCertificationsSection;
