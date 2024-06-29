"use client";

import { cn } from "@/lib/utils";
import { TTestimonialItem } from "@/types/testimonialTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: TTestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[320px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 dark:border-primary_gray  px-8 py-6 md:w-[450px] bg-secondary_white dark:bg-secondary_black"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="block font-title text-lg text-secondary_orange uppercase font-medium mb-2">
                {item.title}
              </span>
              <span className="relative z-20 text-base font-normal text-secondary_gray h-36 inline-block overflow-hidden">
                {item.comment}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                {item?.user?.image && (
                  <figure>
                    <Image
                      src={item?.user?.image}
                      alt={item?.user?.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover overflow-hidden"
                    />
                  </figure>
                )}
                <span className="flex flex-col gap-1">
                  <span className="font-title text-base text-primary_black dark:text-primary_white font-medium">
                    {item.user.name}
                  </span>
                  <span className="font-subtitle text-sm leading-[1.6] text-secondary_gray font-normal">
                    {item.user.designation} at {item.user.company}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
