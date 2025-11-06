import { motion } from "framer-motion";
import { FaMedal, FaQuoteLeft } from "react-icons/fa";

const CaseStudyImpact = ({
  title = "Impact & Results",
  summary = "",
  outcomes = [],
  quote = null,
  quoteAuthor = "",
  kpiImage = null,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaMedal className="text-3xl text-accent-600" />
            <h2 className="text-4xl font-bold text-neutral-900">{title}</h2>
          </div>
          {summary && (
            <p className="text-lg text-neutral-600 max-w-3xl">{summary}</p>
          )}
        </motion.div>

        {/* Outcomes */}
        {outcomes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {outcomes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-accent-50 rounded-xl p-6 border border-accent-200 flex items-start gap-4"
              >
                <div>
                  <FaMedal className="text-2xl text-accent-400 mt-1" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{item.main}</p>
                  {item.sub && (
                    <p className="text-sm text-neutral-600">{item.sub}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Optional KPI/metrics image */}
        {kpiImage && (
          <div className="my-8">
            <img
              src={kpiImage}
              alt="KPI Results"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Optional quote/testimonial */}
        {quote && (
          <div className="max-w-3xl mx-auto mt-10">
            <blockquote className="relative bg-primary-50 rounded-xl px-8 py-6 text-primary-900 border-l-4 border-primary-600 italic">
              <FaQuoteLeft className="absolute -top-4 -left-4 text-3xl text-primary-200 opacity-40" />
              {quote}
              {quoteAuthor && (
                <div className="not-italic mt-4 text-primary-700 font-semibold">
                  &mdash; {quoteAuthor}
                </div>
              )}
            </blockquote>{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyImpact;
