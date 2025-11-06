import { Link } from "react-router-dom";
import { projectsData } from "../../util/projectsData.js";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Projects
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary-600 to-accent-600 rounded-full mb-2"></div>
          <p className="text-lg text-neutral-600 mt-6 max-w-3xl">
            From concept to execution. Each project tells a story of solving
            real problems with thoughtful design and clean code.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer border border-neutral-200 hover:border-primary-200 transition-all"
            >
              <div className="relative overflow-hidden bg-linear-to-br from-primary-100 to-accent-100 h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-700 shadow-md">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-2 group mt-6"
                >
                  View Details
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">
                    <FaArrowRightLong />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
