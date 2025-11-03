import { motion } from "framer-motion";
import Navigation from "./Navigation.jsx";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Your Name
          </motion.div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
