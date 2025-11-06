import { motion } from "framer-motion";
import { experienceData, narrativeMap } from "../../util/experienceData.js";
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-600 to-accent-600 rounded-full mb-2"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mt-6">
            7+ years of designing and building digital products. Here's the
            journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experienceData.map((job, index) => {
            const narrative = narrativeMap[job.title];

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mt-6"
              >
                {/* Timeline Dot */}
                <div className="flex gap-6">
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-primary-600 flex items-center justify-center z-10">
                      {job.current ? (
                        <div className="w-3 h-3 rounded-full bg-primary-600 animate-pulse"></div>
                      ) : (
                        <FaCheckCircle className="text-lg text-primary-600" />
                      )}
                    </div>
                  </div>

                  {/* Job Content */}
                  <div className="flex-1 pb-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {job.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-neutral-600">
                          {job.period}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    {/* Current Badge */}
                    {job.current && (
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block mb-4"
                      >
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold">
                          Currently Here
                        </span>
                      </motion.div>
                    )}

                    {/* Narrative Section */}
                    <div className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-4 mb-6 border border-primary-100">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold text-primary-600 uppercase mb-1">
                            The Challenge
                          </p>
                          <p className="text-sm text-neutral-700">
                            {narrative.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary-600 uppercase mb-1">
                            What I Did
                          </p>
                          <p className="text-sm text-neutral-700">
                            {narrative.what}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary-600 uppercase mb-1">
                            What I Learned
                          </p>
                          <p className="text-sm text-neutral-700">
                            {narrative.learned}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <p className="text-sm font-bold text-neutral-900 mb-3">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-neutral-700"
                          >
                            <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-xs" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
