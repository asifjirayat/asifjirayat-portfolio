import { motion } from "framer-motion";
import { FaLightbulb, FaCheckCircle } from "react-icons/fa";

const CaseStudySolution = ({
  title = "The Solution",
  description = "",
  approaches = [],
  highlights = [],
}) => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-primary-50 to-accent-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="text-3xl text-primary-600" />
            <h2 className="text-4xl font-bold text-neutral-900">{title}</h2>
          </div>
          {description && (
            <p className="text-lg text-neutral-600 max-w-3xl">{description}</p>
          )}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Approach/Strategy */}
          {approaches.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-neutral-900">
                Our Approach
              </h3>

              <div className="space-y-4">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    {/* Icon */}
                    <div className="shrink-0 pt-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white shrink-0">
                        <FaCheckCircle className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 mb-1">
                        {approach.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {approach.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Right: Key Features/Highlights */}
          {highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-neutral-900">
                Key Features
              </h3>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 bg-white rounded-lg p-4 border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all"
                  >
                    {/* Icon */}
                    <div className="shrink-0 pt-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-600 text-white shrink-0">
                        <FaCheckCircle className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Single Column Fallback */}
        {approaches.length === 0 && highlights.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 border border-neutral-200"
          >
            <p className="text-neutral-600">
              No solution details provided. Add approaches or highlights to
              display.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudySolution;
