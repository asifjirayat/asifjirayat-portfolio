import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary-50 to-primary-100"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p
            className="text-xl md:text-2xl text-neutral-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Asif
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-linear-to-r from-primary-600 via-primary-500 to-accent-600 bg-clip-text text-transparent mb-6 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            UI/UX Designer
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-neutral-700 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Blending clean designm frontend code, and AI-driven workflows.
            <span className="font-semibold text-primary-700">
              {" "}
              Google-Certified | 7+ Years | B2B • SaaS • Analytics
            </span>
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 active:bg-primary-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all font-medium active:bg-primary-700 active:border-primary-700"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
