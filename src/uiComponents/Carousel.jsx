// Carousel.jsx
import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Carousel() {
  const carouselRef = useRef();

  const cards = [
    { id: 1, title: "Card One", text: "This is the first card." },
    { id: 2, title: "Card Two", text: "This is the second card." },
    { id: 3, title: "Card Three", text: "This is the third card." },
    { id: 4, title: "Card Four", text: "This is the fourth card." },
  ];

  return (
    <div className="overflow-hidden py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Card Carousel</h2>
      <motion.div
        ref={carouselRef}
        className="flex space-x-6 cursor-grab overflow-x-auto"
        drag="x"
        dragConstraints={{ right: 0, left: -1000 }} // Adjust based on total width
        whileTap={{ cursor: "grabbing" }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            className="min-w-[250px] bg-white p-6 rounded-xl shadow-lg border"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
