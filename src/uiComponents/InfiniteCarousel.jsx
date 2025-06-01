// InfiniteCarousel.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "One", text: "Card One" },
  { id: 2, title: "Two", text: "Card Two" },
  { id: 3, title: "Three", text: "Card Three" },
  { id: 4, title: "Four", text: "Card Four" },
];

export default function InfiniteCarousel() {
  const duplicatedCards = [...cards, ...cards]; // 👈 Duplication for loop illusion

  return (
    <div className="overflow-hidden bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Infinite Carousel</h2>
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        {duplicatedCards.map((card, i) => (
          <div
            key={i}
            className="min-w-[250px] mr-6 p-6 bg-white border rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
