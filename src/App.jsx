import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <div>
        <Navbar />

        {/* Gradient wrapper for main content + footer */}
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 min-h-screen">
          <main>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

          <footer className="py-10 text-center text-[#2E2A84]">
            <h2 className="text-4xl font-bold mb-6">GET IN TOUCH</h2>

            <div className="flex justify-center gap-6 text-4xl mb-6">
              <a
                href="https://www.linkedin.com/in/mohita-chourase"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://github.com/Mohitachourase28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="mailto:mohitachourase03@gmail.com" aria-label="Email">
                <HiOutlineMail className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://www.instagram.com/__.mohita_/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            <p className="text-sm">
              Made by <span className="text-pink-500 text-lg">❤️</span> by{" "}
              <span className="font-semibold">__.Mohita</span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
