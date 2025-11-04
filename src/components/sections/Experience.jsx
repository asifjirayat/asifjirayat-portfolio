import { experienceData } from "../../util/experienceData.js";
import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            My professional journey in design and development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-400 to-accent-400 -translate-x-1/2"></div>

            {/* Timeline items */}
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12"
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline icon */}
                  <div
                    className={`w-16 h-16 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg z-10 shrink-0 ${
                      item.current ? "ring-4 ring-primary-200" : ""
                    }`}
                  >
                    <FaBriefcase className="text-white text-2xl" />
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex-1 w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-neutral-200"
                  >
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-bold">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Job title */}
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p className="text-lg font-semibold text-primary-600 mb-1">
                      {item.company}
                    </p>

                    {/* Location */}
                    <p className="text-sm text-neutral-500 mb-4">
                      {item.location}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, index) => (
                        <li
                          key={index}
                          className="text-neutral-700 flex items-start gap-2 text-sm"
                        >
                          <FaCheckCircle className="text-primary-500 mt-1 text-sm" />{" "}
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
