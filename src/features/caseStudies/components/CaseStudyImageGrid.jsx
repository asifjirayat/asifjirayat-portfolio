import { motion } from "framer-motion";
import ImageGallery from "../../../components/common/ImageGallery.jsx";
import { FaImages } from "react-icons/fa";

const CaseStudyImageGrid = ({
  title = "Design Gallery",
  images = [],
  columns = 2,
  caption = true,
  description = "",
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <FaImages className="text-3xl text-primary-600" />
          <h2 className="text-4xl font-bold text-neutral-900">{title}</h2>
        </motion.div>
        {description && (
          <p className="text-neutral-600 max-w-3xl mb-8">{description}</p>
        )}
        <ImageGallery images={images} columns={columns} caption={caption} />
      </div>
    </section>
  );
};

export default CaseStudyImageGrid;
