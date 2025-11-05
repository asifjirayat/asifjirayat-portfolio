import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary-50 to-accent-50 pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I Design Systems,
              <br />
              <span className="bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Not Just Interfaces
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-neutral-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A UI/UX Designer & Developer who believes great products happen
              when design thinking meets clean code.
            </motion.p>

            {/* Supporting lines */}
            <motion.p
              className="text-base text-neutral-600 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Google-Certified | 7+ Years | B2B • SaaS • Analytics
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium cursor-pointer shadow-lg hover:shadow-xl"
              >
                View Projects
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Let's Chat
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Photo section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full max-w-sm"
            >
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-linear-to-br from-primary-600 to-accent-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>

              {/* Photo container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/Asif-Jirayat-UI-UX-Developer.jpg"
                  alt="Asif Jirayat"
                  className="w-full h-auto object-cover aspect-square"
                />

                {/* Gradient overlay on hover */}
                <motion.div className="absolute inset-0 bg-linear-to-br from-primary-600/0 to-accent-600/0 hover:from-primary-600/10 hover:to-accent-600/10 transition-all" />
              </div>

              {/* Floating badges around photo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-primary-100"
              >
                <span className="text-sm font-bold text-primary-600">
                  UI/UX Designer
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-accent-100"
              >
                <span className="text-sm font-bold text-accent-600">
                  Front-end Developer
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <FaArrowDown className="text-primary-600 text-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
