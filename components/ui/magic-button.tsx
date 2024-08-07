"use client";
import { cn } from "@/lib/utils";
import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  isCircle = false,
}: {
  title?: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  isCircle?: boolean;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex w-max h-max overflow-hidden p-[2px] focus:outline-none",
        isCircle ? "rounded-full" : "rounded-lg"
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />

      <span
        className={`inline-flex overflow-hidden h-full w-full cursor-pointer items-center justify-center z-40 ${
          isCircle ? "rounded-full" : "rounded-lg"
        } dark:bg-secondary_black bg-primary_white text-sm font-medium  backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
