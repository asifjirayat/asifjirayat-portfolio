import { motion } from "framer-motion";
import { FaExclamationCircle } from "react-icons/fa";

const CaseStudyChallenge = ({
  title = "The Challenge",
  description = "",
  challenges = [],
  image = null,
}) => {
  return (
    <section id="challenge" className="py-16 md:py-24 bg-white">
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
            <FaExclamationCircle className="text-3xl text-primary-600" />
            <h2 className="text-4xl font-bold text-neutral-900">{title}</h2>
          </div>
          {description && (
            <p className="text-lg text-neutral-600 max-w-3xl">{description}</p>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Challenge Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  {/* Number Badge */}
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Challenge Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Challenge Image or Stats */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="bg-neutral-100 rounded-xl overflow-hidden aspect-square">
                <img
                  src={image}
                  alt="Challenge visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile Image */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden mt-12"
          >
            <div className="bg-neutral-100 rounded-xl overflow-hidden aspect-video">
              <img
                src={image}
                alt="Challenge visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyChallenge;
