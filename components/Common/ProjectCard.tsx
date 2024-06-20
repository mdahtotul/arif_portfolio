"use client";

/* eslint-disable @next/next/no-img-element */
import { iconMatcher } from "@/lib/matcher";
import { TProjectItem } from "@/types/projectTypes";
import { MapPinIcon } from "lucide-react";
import { PinContainer } from "../ui/PinContainer";

export default function ProjectCard({ item }: { item: TProjectItem }) {
  return (
    <div
      className="w-[80vw] h-[32rem] sm:w-[570px] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center "
      // onClick={() => window.open(item?.live_site)}
    >
      <PinContainer title={item?.live_site} href={item?.live_site}>
        <div className="relative flex items-center justify-center w-[80vw] sm:w-[570px] h-[30vh] sm:h-[40vh] overflow-hidden mb-5">
          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-primary_gray dark:bg-[#13162d]">
            <img src="/bg.png" alt="bg-img" />
          </div>
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="z-10 absolute bottom-0 w-[85%] rotate-6 rounded-lg"
          />
        </div>
        <div className="hidden">
          <h1 className=" font-title font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            {item?.title}
          </h1>

          <p className="lg:text-xl lg;font-normal font-light text-sm line-clamp-2">
            {item?.description}
          </p>

          <div className="grid grid-cols-[1fr_max-content] items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {item?.techIconLists.map((icon, idx) => (
                <div
                  key={idx}
                  className="border border-black/[0.1] dark:border-white/[0.2] rounded-full bg-white dark:bg-primary_black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                  style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                >
                  {iconMatcher(icon, "lg:w-6 lg:h-6 w-4 h-4")}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site <MapPinIcon className="ms-3" color="#CBACF9" />{" "}
              </p>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
