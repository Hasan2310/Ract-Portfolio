import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from 'react-icons/fa'; 
import { SiTailwindcss, SiLaravel, SiMysql } from 'react-icons/si'; 
import '../App.css';

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {/* HTML Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <FaHtml5 className="text-4xl" />
        <h2 className="text-xl font-semibold">HTML</h2>
      </div>

      {/* CSS Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <FaCss3Alt className="text-4xl" />
        <h2 className="text-xl font-semibold">CSS</h2>
      </div>

      {/* JavaScript Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <FaJs className="text-4xl" />
        <h2 className="text-xl font-semibold">JavaScript</h2>
      </div>

      {/* PHP Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <FaPhp className="text-4xl" />
        <h2 className="text-xl font-semibold">PHP</h2>
      </div>

      {/* Tailwind CSS Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <SiTailwindcss className="text-4xl" />
        <h2 className="text-xl font-semibold">Tailwind CSS</h2>
      </div>

      {/* Laravel Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <SiLaravel className="text-4xl" />
        <h2 className="text-xl font-semibold">Laravel</h2>
      </div>

      {/* React Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <FaReact className="text-4xl" />
        <h2 className="text-xl font-semibold">React</h2>
      </div>

      {/* MySQL Card */}
      <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
        <SiMysql className="text-4xl" /> {/* Ikon MySQL dari Simple Icons */}
        <h2 className="text-xl font-semibold">MySQL</h2>
      </div>
    </div>
  );
}

export default Skills;
