import SectionHeader from "@/components/SectionHeader";
import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/content";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 lg:py-40 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Impact Delivered"
          subtitle="From enterprise AI systems to independent research — building intelligent solutions across domains"
        />

        <div className="relative ml-2">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
