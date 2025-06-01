/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiVercel,
  SiJson,
  SiFramer,
  SiCanva,
  SiFigma,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md"; // fallback for Material UI
import { motion } from "framer-motion";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  { name: "Material-UI", icon: <MdDesignServices color="#007fff" /> },
  { name: "Framer Motion", icon: <SiFramer color="#e100ff" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express.js", icon: <SiExpress color="#000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Redux", icon: <SiRedux color="#764abc" /> },
  { name: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
  { name: "Context API", icon: <FaReact color="#61dafb" /> },
  { name: "RESTful API", icon: <SiJson color="#f7df1e" /> },
  { name: "JSON", icon: <SiJson color="#f7df1e" /> },
  { name: "Responsive Design", icon: <SiVercel color="#000" /> },
  { name: "Github", icon: <FaGithub color="#181717" /> },
  { name: "VS Code", icon: <FaCode color="#007acc" /> },
  { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "Firebase", icon: <IoLogoFirebase color="#ffca28" /> },
  { name: "Git", icon: <FaGithub color="#f1502f" /> },
  { name: "Canva", icon: <SiCanva color="#00c4cc" /> },
  { name: "Figma", icon: <SiFigma color="#f24e1e" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-indigo-900"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        //   viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name + idx}
              variants={item}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white transition"
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <span className="font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
