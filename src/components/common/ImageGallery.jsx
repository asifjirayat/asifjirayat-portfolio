import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal.jsx";

const ImageGallery = ({ images = [], columns = 2, caption = true }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-neutral-500 py8">
        No images to display
      </div>
    );
  }

  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <>
      {/* Gallery grid */}
      <div className={`grid ${gridClass[columns] || gridClass[2]} gap-6`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-video">
              <img
                src={image.src || image}
                alt={image.caption || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            {caption && (image.caption || image.title) && (
              <p className="mt-2 text-sm text-neutral-600 font-medium">
                {image.caption || image.title}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.caption || selectedImage.title || ""}
        >
          <div className="space-y-4">
            {/* Main image */}
            <img
              src={selectedImage.src || selectedImage}
              alt={selectedImage.caption || "Full Size"}
              className="w-full rounded-lg"
            />

            {/* Description */}
            {selectedImage.description && (
              <p className="text-neutral-700 leading-relaxed">
                {selectedImage.description}
              </p>
            )}

            {/* Navigation */}
            {images.length > 1 && (
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <button
                  onClick={handlePrev}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  type="button"
                >
                  <FaChevronLeft className="text-neutral-600" />
                </button>
                <span className="text-sm text-neutral-600">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  type="button"
                >
                  <FaChevronRight className="text-neutral-600" />
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
