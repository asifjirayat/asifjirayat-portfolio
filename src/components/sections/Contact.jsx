import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-primary-50 via-accent-50 to-primary-100"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Let's Work Together
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-700 mb-4 leading-relaxed">
            Want to chat? Just shoot me a DM with a direct question and I'll
            respond whenever I can.
          </p>
          <p className="text-base text-neutral-600 mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-8 flex-wrap">
            <motion.a
              href="https://www.linkedin.com/in/asifjirayat/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 p-8 bg-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl transition-all group min-w-40"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <FaLinkedin className="text-4xl text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-neutral-900 block mb-1">
                  LinkedIn
                </span>
                <span className="text-sm text-neutral-600">
                  Connect with me
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/asifjirayat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 p-8 bg-white rounded-2xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl transition-all group min-w-40"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <FaGithub className="text-4xl text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-neutral-900 block mb-1">
                  GitHub
                </span>
                <span className="text-sm text-neutral-600">View my code</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
