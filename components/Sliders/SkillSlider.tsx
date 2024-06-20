"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

interface ISkillSliderProps {
  data: { icon: React.ReactNode; name: string }[];
}

export default function SkillSlider({ data }: ISkillSliderProps) {
  return (
    <div className="">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
        autoplay={{
          delay: 800,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="skill_slider"
      >
        {data.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "max-content",
            }}
          >
            <SkillItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function SkillItem({
  item,
}: {
  item: { icon: React.ReactNode; name: string };
}) {
  return <div>{item.icon}</div>;
}
