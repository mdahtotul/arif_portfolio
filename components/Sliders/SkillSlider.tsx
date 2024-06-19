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
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 4,
          },
          450: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 6,
          },
          770: {
            slidesPerView: 8,
          },
          900: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 10,
          },
          1100: {
            slidesPerView: 12,
          },
        }}
        modules={[Autoplay]}
        className="skill_slider"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SkillItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function SkillItem({
  item,
}: {
  item: { icon: React.ReactNode; name: string };
}) {
  return <div>{item.icon}</div>;
}
