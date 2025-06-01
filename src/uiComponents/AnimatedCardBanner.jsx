// AnimatedCardBanner.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AnimatedCardBanner() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-10">
      {/* 🏷️ Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome to Motion UI</h1>
        <p className="text-lg">Smooth animations for your React components</p>
      </motion.div>

      {/* 🃏 Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">Animated Card</h2>
          <p className="mt-2 text-gray-600">
            This card fades in, moves up, and grows slightly on hover.
          </p>
        </div>
      </motion.div>

      {/* 🔘 Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md font-medium hover:bg-indigo-700 transition"
      >
        Hover Me!
      </motion.button>
    </div>
  );
}
