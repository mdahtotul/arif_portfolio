import { listYoutubeBlog } from "@/actions/youtube";
import BlogSection from "@/components/HomePortion/BlogSection";
import HeroSection from "@/components/HomePortion/HeroSection";
import ProjectSection from "@/components/HomePortion/ProjectSection";
import SkillSection from "@/components/HomePortion/SkillSection";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default async function HomePage() {
  const blogData = await listYoutubeBlog();

  return (
    <div className="max-w-7xl w-full h-full bg-primary_white dark:bg-primary_black pb-20  mx-auto overflow-x-hidden">
      <BackgroundBeams />

      <HeroSection />

      <SkillSection />

      <ProjectSection />

      <BlogSection data={blogData} />
    </div>
  );
}
