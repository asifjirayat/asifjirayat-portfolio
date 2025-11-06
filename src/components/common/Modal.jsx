import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children, title = "" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <motion.div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex items-center justify-between">
                  {title && (
                    <h2 className="text-2xl font-bold text-neutral-900">
                      {title}
                    </h2>
                  )}
                  <button
                    onClick={onClose}
                    className="ml-auto p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <FaTimes className="text-neutral-600 text-xl" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">{children}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
