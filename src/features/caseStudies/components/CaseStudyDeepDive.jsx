import ExpandableSection from "../../../components/common/ExpandableSection.jsx";
import {
  FaSearch,
  FaUsers,
  FaProjectDiagram,
  FaTable,
  FaFileAlt,
} from "react-icons/fa";

const iconMap = {
  research: <FaSearch />,
  persona: <FaUsers />,
  flow: <FaProjectDiagram />,
  test: <FaTable />,
  doc: <FaFileAlt />,
};

const CaseStudyDeepDive = ({
  sections = [],
  title = "Deep Dive: Process & Artifacts",
}) => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          {iconMap["doc"]} {title}
        </h2>
        <div className="space-y-6">
          {sections.map((sect, i) => (
            <ExpandableSection
              key={i}
              title={sect.title}
              icon={iconMap[sect.type] || iconMap["doc"]}
              defaultOpen={!!sect.defaultOpen}
            >
              {sect.content}
            </ExpandableSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDeepDive;
