/* eslint-disable no-unused-vars */
// components/Contact.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        setIsLoading(false);
        toast.success("Message sent successfully!");
        setShowThankYou(true);
        form.current.reset();
        setUserName(""); // reset username state
      },
      (error) => {
        setIsLoading(false);
        toast.error("Failed to send message. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className="p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-indigo-900">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="p-3 rounded border border-pink-300"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="p-3 rounded border border-pink-300"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded border border-pink-300"
          rows={5}
          required
        />

        <button
          type="submit"
          className={`flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded transition ${
            isLoading ? "cursor-not-allowed opacity-75" : "hover:bg-indigo-700"
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.span
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          ) : (
            "Send"
          )}
        </button>

        {showThankYou && (
          <p className="text-green-600 mt-4">
            Thank you, {userName}, for contacting us. We’ll get back to you
            soon.
          </p>
        )}
      </form>
    </motion.section>
  );
}
