// AnimatedUI.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedUI() {
  return (
    <div className="min-h-screen bg-white p-10 space-y-16">
      {/* 🎉 Banner */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl text-center shadow-xl"
      >
        <h1 className="text-4xl font-bold">Welcome to Motion UI</h1>
        <p className="text-lg mt-2">Framer Motion + Scroll + Staggered Cards</p>
      </motion.div>

      {/* 🃏 Cards (with stagger) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            variants={cardVariant}
            className="bg-white rounded-xl border shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">Card {num}</h2>
            <p className="text-gray-600 mt-2">
              This card animates into view as you scroll.
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔘 Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700"
      >
        Get Started
      </motion.button>
    </div>
  );
}
