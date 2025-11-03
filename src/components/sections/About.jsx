import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
            About
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              I'm a UI/UX Designer with{" "}
              <strong className="text-primary-700 font-semibold">
                7+ years of experience
              </strong>{" "}
              building intuitive, scalable digital products across B2B, SaaS,
              and analytics.
            </p>
            <p>
              I specialize in{" "}
              <strong className="text-primary-700 font-semibold">
                AI-enhanced workflows
              </strong>{" "}
              (Framer, Midjourney, Lovable), responsive UI systems, and
              collaborative frontend handoff using HTML, CSS, and JavaScript.
            </p>

            <p>
              My toolkit includes{" "}
              <strong className="text-primary-700 font-semibold">
                Figma's latest features
              </strong>{" "}
              (tokens, variables, AI), Adobe Creative Suite, and design systems
              that scale.
            </p>

            <p>
              I collaborate with agile teams to turn complex problems into
              user-centered, accessible solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
