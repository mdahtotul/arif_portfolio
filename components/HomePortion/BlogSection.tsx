"use client";

import { TYoutubeSearchResult } from "@/types/youtubeTypes";
import SectionHeader from "../Common/SectionHeader";
import BlogSlider from "../Sliders/BlogSlider";

export default function BlogSection({ data }: { data: TYoutubeSearchResult }) {
  return (
    <section className="flex flex-col justify-center mt-10">
      <SectionHeader
        badge="My Blogs"
        title="Tech Trends and Transformations"
        spanTitle={["Tech", "Trends"]}
        subtitle="Engage with informative tech talks and step-by-step tutorials designed to enhance your technical skills."
      />

      <div className="mt-16">
        <BlogSlider data={data} />
      </div>
    </section>
  );
}
