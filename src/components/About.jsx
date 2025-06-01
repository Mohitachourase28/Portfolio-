// About.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-indigo-900"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7 items-center">
        {/* Left: Add Photo Here */}
        <div className="flex justify-center">
          {/* Replace this with your actual image path */}
          <img
            src="/mohita.jpg"
            alt="Mohita Chourase"
            className="w-60 h-65 object-cover rounded-2xl shadow-xl"
          />
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi Everyone, I am Mohita Chourase from India, and I'm a final year
            student of my B.Tech in Computer Science from IPS Academy, Indore.
            <br />
            <span className="text-pink-500 font-semibold">
              I am passionate about coding and emerging technologies.
            </span>
            <br />
            I'm a creative and detail-oriented developer skilled in React,
            Tailwind CSS, and motion design.
            <br />
            <span className="text-pink-500 font-semibold">
              I enjoy crafting interactive and dynamic user interfaces that make
              an impact.
            </span>
          </motion.p>
          {/* Interests */}
          <motion.div className="mt-6 space-y-2" variants={itemVariant}>
            <h3 className="text-xl font-semibold">
              Some of my interests apart from Coding:
            </h3>
            <ul className="space-y-1">
              {[
                "Exploring emerging technologies like Quantum Computing",
                "Learning how real-world systems are built",
                "Sketching and visual storytelling",
                "Understanding how people interact with technology",
                "Brainstorming creative product ideas",
                "Diving into music, rhythm, and creativity",
              ].map((interest, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  variants={itemVariant}
                >
                  <FaArrowRight className="text-indigo-500 animate-pulse" />
                  {interest}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
