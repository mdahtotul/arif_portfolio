import ProjectCard from "@/components/Common/Cards/ProjectCard";
import SectionHeader from "@/components/Common/SectionHeader";
import ProjectSlider from "@/components/Sliders/ProjectSlider";
import { dummyListProjects } from "@/data";

export default function ProjectSection() {
  return (
    <section id="projects">
      <SectionHeader
        badge="My Projects"
        title="Projects Speak for Themselves"
        spanTitle={["Themselves"]}
        subtitle="I've worked across a number of industries and have achieved some incredible projects with some incredible people and brands."
      />

      <div className="hidden xl:flex flex-wrap items-center justify-center xs:p-4 gap-x-24 mt-5">
        {dummyListProjects
          .sort((a, b) => b.priority - a.priority)
          ?.map((item, idx) => (
            <ProjectCard key={idx} item={item} />
          ))}
      </div>

      <div className="block xl:hidden">
        <ProjectSlider data={dummyListProjects} />
      </div>
    </section>
  );
}
