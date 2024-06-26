import { listYoutubeBlog } from "@/actions/youtube";
import AboutSection from "@/components/HomeComponents/AboutPortion/AboutSection";
import LanguageSection from "@/components/HomeComponents/AboutPortion/LanguageSection";
import SkillSection from "@/components/HomeComponents/AboutPortion/SkillSection";
import BlogSection from "@/components/HomeComponents/BlogPortion/BlogSection";
import ComparisonSection from "@/components/HomeComponents/ComparisonPortion/ComparisonSection";
import HeroSection from "@/components/HomeComponents/HeroPortion/HeroSection";
import ProjectSection from "@/components/HomeComponents/ProjectPortion/ProjectSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default async function HomePage() {
  const blogData = await listYoutubeBlog();

  return (
    <div className="max-w-7xl w-full h-full bg-primary_white dark:bg-primary_black pb-20  mx-auto overflow-x-hidden">
      <BackgroundBeams />

      <HeroSection />

      <div className="xs:container">
        <AboutSection />

        <LanguageSection />

        <SkillSection />

        <ComparisonSection />
      </div>

      <ProjectSection />

      <div className="xs:container">
        <BlogSection data={blogData} />
      </div>
    </div>
  );
}
