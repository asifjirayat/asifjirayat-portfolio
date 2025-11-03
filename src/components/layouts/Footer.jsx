import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Asif Jirayat
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              UI/UX Designer crafting delightful digital experiences with 7+
              years of expertise in B2B, SaaS, and Analytics.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Home
                  <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Projects
                  <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Skills
                  <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  About
                  <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Contact
                  <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Find me on</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/asifjirayat/"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/asifjirayat"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Asif Jirayat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
