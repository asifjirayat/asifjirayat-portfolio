import { skillsData } from "../../util/skillsData.js";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaPalette,
  FaBrain,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const iconMap = {
  FaUserCheck,
  FaPalette,
  FaBrain,
  FaPencilRuler,
  FaCode,
};

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
          {skillsData.map((section, index) => {
            const IconComponent = iconMap[section.icon];

            return (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 hover:shadow-lg hover:border-primary-200 transition-all"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-primary-600" />
                  )}
                  <span className="bg-linear-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent">
                    {section.category}
                  </span>
                </h3>

                <ul className="space-y-2">
                  {section.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-neutral-700 flex items-start gap-2 text-sm"
                    >
                      <FaCheckCircle className="text-green-500 text-sm mt-1 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
