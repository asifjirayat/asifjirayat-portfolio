import { motion } from "framer-motion";
import { FaArrowUp, FaUsers, FaClock, FaSmile, FaTrophy } from "react-icons/fa";

const CaseStudyQuickStats = ({ stats = [] }) => {
  // Icon mapping
  const iconMap = {
    FaUsers,
    FaArrowUp,
    FaClock,
    FaSmile,
    FaTrophy,
  };

  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-linear-to-r from-primary-50 to-accent-50 border-t border-b border-primary-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900">Key Results</h2>
          <p className="text-lg text-neutral-600 mt-2">
            Measurable impact and outcomes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || iconMap[FaTrophy];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="text-xl text-primary-600 group-hover:text-white transition-colors" />
                </div>

                {/* Value */}
                <div className="mb-3">
                  <p className="text-3xl md:text-4xl font-bold text-neutral-900">
                    {stat.value}
                  </p>
                  {stat.change && (
                    <p className="text-sm font-semibold text-green-600 mt-1">
                      {stat.change}
                    </p>
                  )}
                </div>

                {/* Label */}
                <p className="text-sm text-neutral-600 font-medium">
                  {stat.label}
                </p>

                {/* Description */}
                {stat.description && (
                  <p className="text-xs text-neutral-500 mt-3">
                    {stat.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyQuickStats;
