import { skillsData, philosophyMap } from "../../util/skillsData.js";
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
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Skills
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-600 to-accent-600 rounded-full mb-2"></div>
          <p className="text-lg text-neutral-600 mt-6 max-w-3xl">
            A combination of design thinking, technical execution, and modern
            tools. Here's what I bring to the table.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon];
            const philosophy = philosophyMap[category.category];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all"
              >
                {/* Icon & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {category.category}
                  </h3>
                </div>

                {/* Philosophy */}
                <div className="mb-6 pb-6 border-b border-neutral-200">
                  <p className="text-sm font-semibold text-primary-600 mb-1">
                    {philosophy.title}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {philosophy.description}
                  </p>
                </div>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-neutral-700 text-sm"
                    >
                      <FaCheckCircle className="text-green-600 mt-0.5 shrink-0" />
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
