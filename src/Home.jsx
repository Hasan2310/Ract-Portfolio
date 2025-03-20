import React, { useState } from 'react'; // Impor useState
import profilePic from "./assets/image.jpg";
import Skills from './components/skills'; // Pastikan nama komponen sesuai (capitalize)
import Project from "./components/Project"; // Pastikan nama komponen sesuai (capitalize)
import './App.css';

function App() {
  // State untuk mengontrol bagian yang ditampilkan
  const [activeSection, setActiveSection] = useState('skills'); // Default menampilkan Skills

  // Fungsi untuk mengubah bagian yang aktif
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <section className="section">
        <div className="text-[#e9e9ea] flex items-center justify-center h-screen">
          <h1 className="md:text-8xl sm:text-5xl text-5xl font-bold text-center">
            Web <br /> Developer
          </h1>
        </div>
      </section>

      <section className="section text-[#e9e9ea] px-5 sm:px-5 md:px-0 pt-10 md:pt-0 h-screen flex justify-center items-center">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center">
          <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <img
                src={profilePic}
                alt="Profile"
                className="absolute border-4 border-white w-[300px] md:w-[800px] md:h-[350px] h-full rounded-lg shadow-lg z-10 transform rotate-2 object-cover"
              />
                <div className="absolute w-full md:w-[320px] h-full bg-slate-400 rounded-lg border-4 border-white shadow-lg -rotate-3 top-1"></div>
              <div className="absolute w-full md:w-[320px] h-full bg-slate-300 rounded-lg border-4 border-white shadow-md -rotate-1 top-2"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 md:ms-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-8 md:mt-0">About Me</h1>
            <p className="text-lg text-gray-300">
              Hi, I'm <span className="font-semibold text-white">Hasan Ahmad Halibah</span>, a passionate web developer
              who loves creating modern, responsive, and interactive websites. I have experience in React, Tailwind CSS, and more!
            </p>
            <button className="mt-6 px-6 py-3 bg-[#e9e9ea] text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section className="section py-18">
        <h1 className="text-center text-3xl md:text-5xl font-bold">Portfolio Showcase</h1>

        {/* Navigation Links */}
        <div className="flex justify-center mt-8">
          <hr className="w-7xl" />
        </div>
        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="#skills"
            className="text-xl font-medium text-blue-500 hover:text-blue-700"
            onClick={() => handleSectionClick('skills')} // Mengubah state ke 'skills'
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-xl font-medium text-blue-500 hover:text-blue-700"
            onClick={() => handleSectionClick('projects')} // Mengubah state ke 'projects'
          >
            Projects
          </a>
        </div>

        {/* Conditionally render based on activeSection state */}
        {activeSection === 'skills' && (
          <div id="skills">
            <Skills />
          </div>
        )}

        {activeSection === 'projects' && (
          <div id="projects">
            <Project />
          </div>
        )}
      </section>

    </div>
  );
}

export default App;
