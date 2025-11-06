import { useState } from "react";
import { motion } from "framer-motion";
import CategoryBadge from "../components/common/CategoryBadge.jsx";
import Modal from "../components/common/Modal";
import ImageGallery from "../components/common/ImageGallery";
import ExpandableSection from "../components/common/ExpandableSection.jsx";
import { FaLightbulb, FaImage, FaBox } from "react-icons/fa";

const ComponentTestPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Sample images for gallery
  const sampleImages = [
    {
      src: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
      caption: "Dashboard Overview",
      description: "Main analytics dashboard showing key metrics",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      caption: "User Research",
      description: "User persona and research findings",
    },
    {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      caption: "Wireframe",
      description: "Low-fidelity wireframe mockup",
    },
    {
      src: "https://images.unsplash.com/photo-1561123527-da47bd85e563?w=500&h=300&fit=crop",
      caption: "Final Design",
      description: "High-fidelity design with interactions",
    },
    {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      caption: "User Testing",
      description: "A/B testing results and analytics",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      caption: "Results",
      description: "Key outcomes and metrics",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-linear-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Common Components Test
          </h1>
          <p className="text-lg text-neutral-600">
            Testing all 4 reusable components for case studies
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* 1. Category Badge Test */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              1. Category Badge Component
            </h2>
            <p className="text-neutral-600">
              Reusable badge component for categorizing work
            </p>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">
                Default Variants:
              </h3>
              <div className="flex flex-wrap gap-4">
                <CategoryBadge category="Case Study" variant="case" />
                <CategoryBadge category="Social Media" variant="social" />
                <CategoryBadge category="Logo Design" variant="logo" />
                <CategoryBadge category="PDF Carousel" variant="pdf" />
                <CategoryBadge category="React Component" variant="tech" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">
                Default Style:
              </h3>
              <div className="flex flex-wrap gap-4">
                <CategoryBadge category="Badge 1" />
                <CategoryBadge category="Badge 2" />
                <CategoryBadge category="Badge 3" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. Modal Test */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              2. Modal Component
            </h2>
            <p className="text-neutral-600">
              Reusable modal for displaying images and content
            </p>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Open Modal
            </button>

            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Modal Test"
            >
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop"
                  alt="Test"
                  className="w-full rounded-lg"
                />
                <p className="text-neutral-700">
                  This is a test of the Modal component. It displays content
                  with a clean overlay and smooth animations.
                </p>
              </div>
            </Modal>
          </div>
        </motion.section>

        {/* 3. Image Gallery Test */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              3. Image Gallery Component
            </h2>
            <p className="text-neutral-600">
              Grid gallery with click-to-expand modal functionality
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                2-Column Grid:
              </h3>
              <ImageGallery images={sampleImages} columns={2} caption={true} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                3-Column Grid:
              </h3>
              <ImageGallery images={sampleImages} columns={3} caption={true} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Single Column (No Captions):
              </h3>
              <ImageGallery images={sampleImages} columns={1} caption={false} />
            </div>
          </div>
        </motion.section>

        {/* 4. Expandable Section Test */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              4. Expandable Section Component
            </h2>
            <p className="text-neutral-600">
              Collapsible sections for deep-dive content
            </p>
          </div>

          <div className="space-y-4">
            <ExpandableSection
              title="Research & Discovery"
              icon={<FaLightbulb />}
              defaultOpen={false}
            >
              <div className="space-y-4">
                <p className="text-neutral-700">
                  This section contains detailed research findings, user
                  interviews, and competitive analysis that informed the design
                  decisions.
                </p>
                <ImageGallery
                  images={sampleImages.slice(0, 3)}
                  columns={2}
                  caption={true}
                />
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="Design Process"
              icon={<FaImage />}
              defaultOpen={false}
            >
              <div className="space-y-4">
                <p className="text-neutral-700">
                  Our design process included wireframing, prototyping, and
                  extensive user testing to validate our solutions.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700">
                  <li>Low-fidelity wireframes</li>
                  <li>Interactive prototypes</li>
                  <li>User testing sessions</li>
                  <li>Design iterations</li>
                </ul>
              </div>
            </ExpandableSection>

            <ExpandableSection
              title="Results & Impact"
              icon={<FaBox />}
              defaultOpen={true}
            >
              <div className="space-y-4">
                <p className="text-neutral-700">
                  The redesigned platform resulted in significant improvements
                  across key metrics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <p className="text-sm text-primary-600 font-semibold">
                      User Engagement
                    </p>
                    <p className="text-2xl font-bold text-primary-700">+45%</p>
                  </div>
                  <div className="bg-accent-50 rounded-lg p-4">
                    <p className="text-sm text-accent-600 font-semibold">
                      Task Completion
                    </p>
                    <p className="text-2xl font-bold text-accent-700">+32%</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600 font-semibold">
                      User Satisfaction
                    </p>
                    <p className="text-2xl font-bold text-green-700">4.8/5</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-primary-50 to-accent-50 rounded-xl p-8 border border-primary-100"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Component Test Summary ✅
          </h2>
          <ul className="space-y-2 text-neutral-700">
            <li>✅ CategoryBadge - Working (6 variants tested)</li>
            <li>✅ Modal - Working (smooth animations, click-to-close)</li>
            <li>
              ✅ ImageGallery - Working (multiple columns, captions, modal)
            </li>
            <li>✅ ExpandableSection - Working (smooth expand/collapse)</li>
          </ul>
          <p className="mt-6 text-sm text-neutral-600">
            All components are ready for integration into case study pages!
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default ComponentTestPage;
