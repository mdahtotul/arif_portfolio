"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import ProjectCard from "@/components/Common/Cards/ProjectCard";
import { TProjectItem } from "@/types/projectTypes";
import { Autoplay } from "swiper/modules";

interface IProjectSliderProps {
  data: TProjectItem[];
}

export default function ProjectSlider({ data }: IProjectSliderProps) {
  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="project_slider"
      >
        {data
          .sort((a, b) => b.priority - a.priority)
          ?.map((item, idx) => (
            <SwiperSlide key={idx} style={{ margin: "0 auto" }}>
              <div className="flex items-center justify-center">
                <ProjectCard key={idx} item={item} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
