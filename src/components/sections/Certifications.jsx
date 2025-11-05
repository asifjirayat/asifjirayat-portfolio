import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { SiGoogle, SiInteractiondesignfoundation } from "react-icons/si";
import { certificationsData } from "../../util/certificationsData.js";

const iconMap = {
  SiGoogle,
  SiInteractiondesignfoundation,
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const IssuerIcon = iconMap[cert.issuerIcon];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-md">
                    <FaCertificate className="text-2xl" />
                  </div>
                  <div className="text-primary-600">
                    {IssuerIcon && <IssuerIcon className="text-2xl" />}
                  </div>
                </div>

                {/* Certification title */}
                <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-semibold text-primary-700 mb-1">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-sm text-neutral-500 mb-4">
                  Issued: {cert.date}
                </p>

                {/* View certificate link */}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:gap-3 transition-all"
                >
                  View Certificate <FaExternalLinkAlt className="text-xs" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
