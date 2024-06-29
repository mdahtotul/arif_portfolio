"use client";

import YoutubeIcon from "@/components/Common/IconComp/YoutubeIcon";
import { usePlayerStore } from "@/hooks/useVideoPlayer";
import { youtubeVideoUrl } from "@/lib/envs";
import { TYoutubeSearchResultItem } from "@/types/youtubeTypes";
import { PlayIcon } from "lucide-react";

export default function BlogCard({ item }: { item: TYoutubeSearchResultItem }) {
  const { isModalOpen, setVideoUrl, onModalOpen } = usePlayerStore();

  const { title, description, thumbnails } = item?.snippet || {};

  const generatedVideoUrl = item?.id?.videoId
    ? `${youtubeVideoUrl}/${item?.id?.videoId}`
    : "";

  return (
    <>
      <div className="w-max h-[500px] p-4 xs:-8 rounded-2xl xs:rounded-3xl bg-secondary_white dark:bg-secondary_black border border-primary_gray">
        {/* video portion */}
        <div className="w-[280px] xs:w-[350px] h-[180px]">
          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnails?.high?.url}
              alt={title}
              className="w-full h-full object-cover"
            />

            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary_orange hover:bg-primary_orange flex items-center justify-center cursor-pointer"
              role="button"
              onClick={() => {
                setVideoUrl(generatedVideoUrl);
                onModalOpen();
              }}
            >
              <PlayIcon className="w-6 h-6 text-primary_white cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="w-[280px] xs:w-[350px] h-[calc(100%-180px)] mt-8 space-y-4">
          <h1
            title={title}
            className="font-subtitle font-bold text-2xl line-clamp-1 text-primary_black dark:text-primary_white"
          >
            {title}
          </h1>
          <p
            title={description}
            className="text-secondary_gray font-medium line-clamp-3 h-20"
          >
            {description}
          </p>

          <p className="font-title font-bold">
            Channel: {item?.snippet?.channelTitle}
          </p>
          <a
            href={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end lg:text-xl md:text-xs text-sm text-[#CBACF9] mt-auto"
          >
            YouTube <YoutubeIcon className="ms-2 w-10 h-10" />{" "}
          </a>
        </div>
      </div>
    </>
  );
}
