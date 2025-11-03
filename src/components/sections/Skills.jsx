import { motion } from "framer-motion";
import { li } from "framer-motion/client";

const skillsData = [
  {
    category: "UX Skills",
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
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
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
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                {section.category}
              </h3>

              <ul className="space-y-2">
                {section.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <span className="text-gray-400 mt-1">•</span>
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
