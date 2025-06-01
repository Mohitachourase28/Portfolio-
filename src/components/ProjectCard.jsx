/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  link,
  githubLink,
  deployed,
  onLinkClick
}) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:scale-105 relative group"
      whileHover={{ scale: 1.02 }}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-indigo-600">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-1">{tech.join(", ")}</p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-indigo-900/90 text-white flex opacity-0 group-hover:opacity-100 transition duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {/* Left side: Deployment */}
        <div className="w-1/2 flex flex-col justify-center items-center border-r border-white px-4 text-center">
          <p className="text-md mb-3">Deployed with: {deployed.join(", ")}</p>
          <button
            onClick={onLinkClick}
            className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium"
          >
            Open Live
          </button>
        </div>

        {/* Right side: Tech / GitHub */}
        <div className="w-1/2 flex flex-col justify-center items-center px-4 text-center">
          <p className="text-md mb-3">Review code with: {tech.join(", ")}</p>
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium"
            >
              View Code
            </a>
          ) : (
            <span className="text-sm text-white/70 italic">GitHub not available</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
