import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaPalette,
  FaBrain,
  FaPencilRuler,
  FaCode,
  FaCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";

const skillsData = [
  {
    category: "UX Skills",
    icon: <FaUserCheck className="text-3xl text-primary-600" />,
    skills: [
      "User Research",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Journey Mapping",
      "A/B Testing",
      "Accessibility (WCAG)",
      "UX Writing",
      "UX Metrics",
      "Information Architecture",
    ],
  },
  {
    category: "UI & Systems",
    icon: <FaPalette className="text-3xl text-primary-600" />,
    skills: [
      "Figma (Components, Tokens, Variables, AI Features)",
      "Design Tokens",
      "Component Libraries",
      "Motion Design",
      "Microinteractions",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    category: "AI Tools & Prompting",
    icon: <FaBrain className="text-3xl text-primary-600" />,
    skills: [
      "Lovable",
      "Framer AI",
      "Midjourney",
      "Galileo AI",
      "Uizard",
      "Prompt Engineering",
      "Persona & Copy Generation",
      "ChatGPT (for UX writing, ideation, and research)",
    ],
  },
  {
    category: "Design & Creative Tools",
    icon: <FaPencilRuler className="text-3xl text-primary-600" />,
    skills: [
      "Adobe Creative Suite (Illustrator, Photoshop, XD, After Effects)",
      "FigJam",
      "Miro",
      "Framer",
      "InVision",
    ],
  },
  {
    category: "Front-end & Dev Handoff",
    icon: <FaCode className="text-3xl text-primary-600" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "React",
      "Git",
      "Dev Handoff",
      "Agile",
      "Jira",
      "Trello",
      "Slack",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">{section.icon}</span>
                <span className="bg-linear-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent">
                  {section.category}
                </span>
              </h3>

              <ul className="space-y-2">
                {section.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-neutral-700 flex items-center gap-2 text-md"
                  >
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
