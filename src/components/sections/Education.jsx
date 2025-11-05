import { educationData } from "../../util/educationData.js";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Academic background and learning journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          {/* Education items */}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md shrink-0">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <p className="text-sm text-neutral-500">{edu.location}</p>
                    <span className="hidden md:block text-neutral-300">•</span>
                    <p className="text-sm font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </p>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
