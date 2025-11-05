import { motion } from "framer-motion";
import { FaCode, FaPalette, FaLightbulb } from "react-icons/fa";
import { storyPointsData as storyPoints } from "../../util/storyPointsData.js";

const iconMap = {
  FaCode,
  FaPalette,
  FaLightbulb,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-600 to-accent-600 rounded-full"></div>
        </motion.div>

        {/* Main story */}
        <div className="max-w-5xl mx-auto">
          {/* The journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-linear-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              The Journey
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              I started as a designer obsessed with pixels. Then I learned to
              code. Now I obsess over the space between pixels and logic.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Over 7 years, I've worked on B2B platforms, SaaS products, and
              healthcare analytics-places where every design decision matters
              because real people depend on it.
            </p>
          </motion.div>

          {/* The three pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {storyPoints.map((point, index) => {
              const Icon = iconMap[point.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="text-2xl text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-3">
                    {point.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* The philosopy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border-2 border-primary-600 mb-16"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              What I Believe In
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-primary-600 font-bold text-xl leading-none mt-1">
                  ✦
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">
                    Design isn't just beautiful
                  </p>
                  <p className="text-neutral-600 text-sm">
                    It's about solving real problems for real people.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-600 font-bold text-xl leading-none mt-1">
                  ✦
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">
                    Code is communication
                  </p>
                  <p className="text-neutral-600 text-sm">
                    I write it for humans first, compilers second.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-600 font-bold text-xl leading-none mt-1">
                  ✦
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">
                    If users have to think, I failed
                  </p>
                  <p className="text-neutral-600 text-sm">
                    Simplicity is the ultimate sophistication.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-600 font-bold text-xl leading-none mt-1">
                  ✦
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">
                    If it doesn't ship, it doesn't matter
                  </p>
                  <p className="text-neutral-600 text-sm">
                    Perfect is the enemy of done.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* The mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-linear-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Right Now</h3>

            <p className="text-lg leading-relaxed mb-4">
              Building interfaces that solve real problems for real people.
              Where <span className="font-semibold">every decision</span> is
              driven by user research and intent.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              Integrating AI tools into my design and development workflow to
              ship faster, smarter, and more creatively. Because{" "}
              <span className="font-semibold">innovation</span> is how we stay
              ahead.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
