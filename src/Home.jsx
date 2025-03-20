import profilePic from "./assets/image.jpg";
import { motion } from "framer-motion";
import './App.css'

function App() {
  return (
    <div>
      <section className="section text-[#e9e9ea] flex items-center justify-center h-screen bg-[#121212]">
      <div className="container mx-auto flex justify-center">
        <svg
          width="600"
          height="200"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            fontSize="80"
            fontWeight="bold"
            fill="transparent"
            stroke="#e9e9ea"
            strokeWidth="2"
            fontFamily="Arial, sans-serif"
            initial={{ strokeDasharray: "0 100%" }}
            animate={{ strokeDasharray: "100% 0" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Website Developer
          </motion.text>
        </svg>
      </div>
    </section>

      <section className="section text-[#e9e9ea] px-5 sm:px-5 md:px-0 pt-10 md:pt-0 h-[100vh] flex justify-center items-center">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center">
          <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <img
                src={profilePic}
                alt="Profile"
                className="absolute w-[300px] md:w-[800px] md:h-[350px] h-full rounded-lg shadow-lg z-10 transform rotate-2 object-cover"
              />
              <div className="absolute w-full md:w-[320px] h-full bg-slate-400 rounded-lg border-4 border-white shadow-lg -rotate-3 top-1"></div>
              <div className="absolute w-full md:w-[320px] h-full bg-slate-300 rounded-lg border-4 border-white shadow-md -rotate-1 top-2"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
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


    </div>
  )
}

export default App
