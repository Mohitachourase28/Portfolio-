// Home.jsx
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        className="text-7xl md:text-7xl font-bold text-indigo-900 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Mohita Chourase 👋
      </motion.h2>
      <motion.span
        className="text-indigo-700 text-xl md:text-2xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <Typewriter
          words={[
            "Web Developer",
            "Open Source Contributor",
            "Tech Enthusiast",
            "Lifelong Learner",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.span>

      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A final year B.Tech student in Computer Science who is passionate about
        coding and emerging tech. Self-driven, always learning, and eager to
        grow.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-8 text-2xl text-indigo-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="https://github.com/Mohitachourase28"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:mohitachourase03@gmail.com"
          className="hover:text-black transition-colors duration-200"
        >
          <HiOutlineMail />
        </a>

        <a
          href="https://www.linkedin.com/in/mohita-chourase"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/__.mohita_/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  );
}
