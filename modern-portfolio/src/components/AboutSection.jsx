const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          <span className="block">Hello, I'm</span>
          <span className="block text-cyan-400 mt-2">Madhur N Patel</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
          They call me <strong className="text-cyan-300">Master Madhur</strong>. I'm a Computer Science and Engineering student at Indus University, Ahmedabad, graduating in 2026. Based in Gujarat, India, I have a strong passion for Artificial Intelligence, building intuitive cross-platform applications, and contributing to the open-source community.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 leading-relaxed">
          I'm on a journey to become an AI expert and love exploring everything from machine learning models with TensorFlow to the latest Large Language Models.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
