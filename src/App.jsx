import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-200 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-gray-900 z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-white">Mohipal Kumar</h1>
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Mohipal Kumar
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Full Stack Developer (MERN) | DSA Enthusiast
          </p>
          <p className="mt-2 text-gray-500">
            600+ LeetCode Problems · Rating 1785 · MNNIT Allahabad
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700" href="#">
              Resume
            </a>
            <a className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800" href="#projects">
              Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a Full Stack Developer skilled in the MERN stack with strong
          problem-solving abilities. I have solved 600+ DSA problems on LeetCode
          and built scalable web applications using React, Node.js, Express,
          and MongoDB. Currently pursuing B.Tech at MNNIT Allahabad.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Languages & CS</h3>
              <p className="text-gray-400">
                C++, Python, DSA, OOP, OS, DBMS, Computer Networks
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-400">
                React.js, Node.js, Express.js, Tailwind CSS, HTML, CSS
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Database & Tools</h3>
              <p className="text-gray-400">
                MongoDB, SQL (Basic), Git, GitHub, Postman, VS Code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BookStore */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">BookStore (MERN)</h3>
            <p className="text-gray-400 mt-2">
              Online BookStore with JWT authentication, admin dashboard,
              search, filter, cart, and CRUD operations.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: React, Node.js, Express, MongoDB
            </p>
            <div className="flex gap-4 mt-4">
              <FaGithub className="text-xl hover:text-white cursor-pointer" />
              <FaCode className="text-xl hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* RealEstate */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">RealEstate (MERN)</h3>
            <p className="text-gray-400 mt-2">
              Property buying and renting platform with advanced search,
              filters, and role-based authentication.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Tech: React, Node.js, Express, MongoDB
            </p>
            <div className="flex gap-4 mt-4">
              <FaGithub className="text-xl hover:text-white cursor-pointer" />
              <FaCode className="text-xl hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
          <ul className="text-gray-400 space-y-2 list-disc pl-6">
            <li>2nd Rank – Codigo 2K24 (150+ participants), MNNIT</li>
            <li>3rd Rank – Cognizance 2K24 Interdisciplinary Coding Challenge</li>
            <li>600+ LeetCode Problems Solved (Rating 1785)</li>
          </ul>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>

  <p className="text-gray-400 mb-6">
    Feel free to reach out to me for opportunities or collaboration.
  </p>

  <div className="flex flex-wrap gap-6 text-lg">
    {/* GitHub */}
    <a
      href="https://github.com/mohipal92"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-white"
    >
      <FaGithub /> GitHub
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/mohipal-kumar-96a77b258/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-white"
    >
      <FaLinkedin /> LinkedIn
    </a>

    {/* Email */}
    <a
      href="mailto:mohipalmaahi4050@gmail.com"
      className="flex items-center gap-2 hover:text-white"
    >
      <FaEnvelope /> mohipalkumar14@gmail.com
    </a>
  </div>
</section>


      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2025 Mohipal Kumar. All rights reserved.
      </footer>

    </div>
  );
}
