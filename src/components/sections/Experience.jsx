import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    title: "Senior Web & Visual Designer",
    company: "HealthWorksAI (TEG Analytics)",
    period: "Jul 2021 - Present",
    location: "Remote",
    responsibilities: [
      "Designed and prototyped marketing and product-facing interfaces using Figma and Adobe XD",
      "Built responsive landing pages for campaigns, improving lead generation and engagement",
      "Created visuals and motion assets for analytics dashboards, social media, and web campaigns",
      "Solved UX issues across the analytics portal, enhancing usability and task flows",
      "Wrote clean, reusable HTML/CSS/JS code to support front-end implementation",
      "Developed graphics and animations for web and email, increasing brand recall",
      "Collaborated with marketing and product teams using tools like HubSpot, Jira, and Git",
    ],
    current: true,
  },
  {
    id: 2,
    title: "Frontend Developer & Visual Designer",
    company: "Peridot Creative Studio",
    period: "Jun 2018 - May 2021",
    location: "India",
    responsibilities: [
      "Designed and developed responsive websites and mobile UIs with HTML, CSS, and JavaScript",
      "Built reusable UI components and ensured WCAG accessibility across platforms",
      "Created high-fidelity visuals and marketing assets for digital campaigns and brand identity",
      "Maintained design consistency by aligning with client brand systems and guidelines",
      "Conducted functional testing and debugging to ensure performance and cross-browser compatibility",
      "Collaborated directly with clients to gather feedback, iterate designs, and deliver tailored solutions",
      "Used Git and version control tools to maintain clean and collaborative workflows",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            My professional journey in design and development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-400 to-accent-400 -translate-x-1/2"></div>

            {/* Timeline items */}
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12"
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline icon */}
                  <div
                    className={`w-16 h-16 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg z-10 shrink-0 ${
                      item.current ? "ring-4 ring-primary-200" : ""
                    }`}
                  >
                    <FaBriefcase className="text-white text-2xl" />
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex-1 w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-neutral-200"
                  >
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-bold">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Job title */}
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p className="text-lg font-semibold text-primary-600 mb-1">
                      {item.company}
                    </p>

                    {/* Location */}
                    <p className="text-sm text-neutral-500 mb-4">
                      {item.location}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, index) => (
                        <li
                          key={index}
                          className="text-neutral-700 flex items-start gap-2 text-sm"
                        >
                          <FaCheckCircle className="text-primary-500 mt-1 text-sm" />{" "}
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
