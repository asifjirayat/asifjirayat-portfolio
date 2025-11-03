import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HealthWorksAI Product Page",
    category: "UI/UX",
    description: "Product page design for healthcare analytics platform",
    tags: ["UI Design", "Healthcare", "SaaS"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Network Score App",
    category: "UI/UX",
    description: "Mobile app for network performance analytics",
    tags: ["Mobile UI", "Analytics", "UX"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "SaaS Platform",
    category: "UI/UX",
    description: "Complete SaaS platform design system",
    tags: ["Web Design", "SaaS", "Design System"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    category: "Logo & Brand Identity",
    description: "Comprehensive brand identity and logo design projects",
    tags: ["Branding", "Logo Design", "Identity"],
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    title: "Multi Channel Marketing Creatives",
    category: "Creative Design",
    description: "Marketing assets across multiple channels",
    tags: ["Marketing", "Graphics", "Campaign"],
    image: "https://placehold.co/600x400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-gray-900 font-medium hover:underline"
                >
                  View in Detail
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
