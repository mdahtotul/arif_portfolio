"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import VerticalTimeline from "@/components/ui/vertical-timeline";
import { dummyListExperience } from "@/data";
import { useOrigin } from "@/hooks/useOrigin";
import { useTheme } from "next-themes";

export default function ExperienceSection() {
  const { resolvedTheme } = useTheme();
  const origin = useOrigin();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <section className="mt-16" id="experience">
      <SectionHeader
        badge="Experience"
        title="My Coding Odyssey"
        spanTitle={["Odyssey"]}
        subtitle="Key Milestones in My Web Development Career"
      />

      <VerticalTimeline data={dummyListExperience} />
    </section>
  );
}
