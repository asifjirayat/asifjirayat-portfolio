import { motion } from "framer-motion";
import CategoryBadge from "../../../components/common/CategoryBadge.jsx";

const CaseStudyHero = ({
  title = "Case Study Title",
  subtitle = "Short tagline or problem statement",
  role = "My Role",
  period = "Timeline",
  heroImage = null,
  category = "Case Study",
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            <div>
              <CategoryBadge category={category} variant="case" />
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-neutral-600">{subtitle}</p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                  My Role
                </p>
                <p className="text-base md:text-lg text-neutral-900 font-medium mt-1">
                  {role}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                  Timeline
                </p>
                <p className="text-base md:text-lg text-neutral-900 font-medium mt-1">
                  {period}
                </p>
              </div>
            </div>

            {/* CTA Button (Optional) */}
            <div className="pt-4">
              <a
                href="#challenge"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Read Case Study
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile Hero Image */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden mt-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyHero;
