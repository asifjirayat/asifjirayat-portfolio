import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Certifications", path: "#certifications" },
  { name: "Education", path: "#education" },
  { name: "Contact", path: "#contact" },
];

const Navigation = () => {
  const [hoveredPath, setHoveredPath] = useState("");

  return (
    <nav className="hidden md:flex gap-1" role="navigation">
      {navItems.map((item) => {
        const isHovered = item.path === hoveredPath;

        return (
          <a
            key={item.path}
            href={item.path}
            className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary-600 relative transition-colors duration-200"
            onMouseEnter={() => setHoveredPath(item.path)}
            onMouseLeave={() => setHoveredPath("")}
          >
            <span className="relative z-10">{item.name}</span>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-primary-50 rounded-lg z-0"
                layoutId="navbar-hover"
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              ></motion.div>
            )}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
