// components/Projects.jsx
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";
import { toast } from "react-hot-toast";

const projects = [
  {
    title: "Ticket app",
    image: img1,
    description:
      "React Support Ticket System with Firebase Authentication & Firestore",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://ticket--app.web.app/",
    githubLink: "https://github.com/Mohitachourase28/ticket_app.git",
    deployed: ["Firebase Hosting", "Firestore"],
  },
  {
    title: "Portfolio Website",
    image: img2,
    description: "A React portfolio website showcasing my projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "",
    githubLink: "",
    deployed: ["Vercel"],
  },
  {
    title: "CrowdCatch",
    image: img3,
    description:
      "A tech community platform for sharing knowledge and resources.",
    tech: ["React", "MongoDB", "Express", "Node"],
    link: "",
    githubLink: "https://github.com/Mohitachourase28/crowdcatch.git",
    deployed: ["Vercel", "MongoDB Atlas"],
  },
];

export default function Projects() {
  const handleLinkClick = (link) => {
    if (!link) {
      toast.error("Live link is not available right now.");
    } else {
      window.open(link, "_blank");
    }
  };
  return (
    <section id="projects" className="min-h-screen px-6 py-16">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-800">
          Projects
        </h2>

        {/* Add this wrapper */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((proj, i) => (
              <ProjectCard
                key={i}
                {...proj}
                onLinkClick={() => handleLinkClick(proj.link)}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
