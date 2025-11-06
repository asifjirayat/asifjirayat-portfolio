import { motion } from "framer-motion";
import { certificationsData } from "../../util/certificationsData.js";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { SiGoogle, SiInteractiondesignfoundation } from "react-icons/si";

const iconMap = {
  SiGoogle,
  SiInteractiondesignfoundation,
};

const Certifications = () => {
  // Group by issuers
  const groupedByIssuer = certificationsData.reduce((acc, cert) => {
    const issuer = cert.issuer;
    if (!acc[issuer]) {
      acc[issuer] = [];
    }
    acc[issuer].push(cert);
    return acc;
  }, {});

  const issuers = Object.keys(groupedByIssuer);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-600 to-accent-600 rounded-full mb-2"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mt-6">
            Professional certifications and continuous learning
          </p>
        </motion.div>

        {/* Grouped by Issuer */}
        <div className="max-w-5xl mx-auto space-y-12">
          {issuers.map((issuer, issuerIndex) => {
            const certs = groupedByIssuer[issuer];
            const IssuerIcon = iconMap[certs[0].issuerIcon];

            return (
              <motion.div
                key={issuer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: issuerIndex * 0.2, duration: 0.6 }}
              >
                {/* Issuer Header */}
                <div className="flex items-center gap-3 mb-6">
                  {IssuerIcon && (
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <IssuerIcon className="text-2xl text-primary-600" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {issuer}
                  </h3>
                  <span className="ml-auto text-sm font-semibold text-neutral-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
                    {certs.length}{" "}
                    {certs.length === 1 ? "Certificate" : "Certificates"}
                  </span>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certs.map((cert, certIndex) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: issuerIndex * 0.2 + certIndex * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{ y: -5 }}
                      className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all group"
                    >
                      {/* Icon */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-md shrink-0">
                          <FaCertificate className="text-lg" />
                        </div>
                      </div>

                      {/* Certification Title */}
                      <h4 className="text-base font-bold text-neutral-900 mb-3 line-clamp-2 min-h-12">
                        {cert.title}
                      </h4>

                      {/* Date */}
                      <p className="text-sm text-neutral-500 mb-4">
                        {cert.date}
                      </p>

                      {/* View Certificate Link */}
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:gap-3 transition-all"
                      >
                        View Certificate
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-5xl mx-auto mt-16 pt-12 border-t border-neutral-200 text-center"
        >
          <p className="text-neutral-600">
            <span className="text-3xl font-bold text-primary-600">
              {certificationsData.length}
            </span>
            <span className="ml-2">certifications completed</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
