import { dummyListProjects } from "@/data";
import Badge from "../Common/Badge";
import ProjectCard from "../Common/ProjectCard";

export default function ProjectSection() {
  return (
    <section>
      <div className="w-full flex flex-col space-y-5">
        <Badge variant="b&w" size="lg" className="mx-auto w-max">
          My Projects
        </Badge>
        <h1 className="font-title font-normal text-2xl xs:text-4xl md:text-6xl text-primary_black dark:text-white text-center">
          Projects speaks for{" "}
          <span className="text-secondary_orange">themselves</span>{" "}
        </h1>
        <p className="font-subtitle max-w-xl text-center mx-auto text-secondary_gray text-base sm:text-xl font-medium mt-7">
          I&apos;ve worked across a number of industries and have achieved some
          incredible projects with some incredible people and brands.
        </p>
      </div>

      <div className="w-[90%] overflow-hidden flex flex-wrap items-center justify-center xs:p-4 gap-x-24 mt-5 mx-auto">
        {dummyListProjects
          .sort((a, b) => b.priority - a.priority)
          ?.map((item, idx) => (
            <ProjectCard key={idx} item={item} />
          ))}
      </div>
    </section>
  );
}
