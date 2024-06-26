"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import BlogCard from "@/components/Common/Cards/BlogCard";
import { TYoutubeSearchResult } from "@/types/youtubeTypes";
import { Autoplay } from "swiper/modules";

export default function BlogSlider({ data }: { data: TYoutubeSearchResult }) {
  return (
    <div className="">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="skill_slider"
      >
        {data?.items?.map((item, idx) => {
          if (item?.id?.channelId) return null;
          return (
            <SwiperSlide
              key={idx}
              style={{
                width: "max-content",
              }}
            >
              <BlogCard key={idx} item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
