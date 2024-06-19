"use client";

import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

interface IButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  variant?: "orange" | "black";
  size?: "sm" | "lg";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button2({
  type,
  children,
  className,
  variant,
  size,
  isLoading,
  isDisabled,
  onClick,
}: IButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center flex-nowrap whitespace-nowrap transition-all duration-300 cursor-pointer backdrop:blur-[10px] gap-[10px]",
        variant === "orange" &&
          "bg-secondary_orange hover:bg-primary_orange text-primary_black dark:text-primary_white focus-visible:shadow-orange_shadow focus:shadow-orange_shadow",
        variant === "black" &&
          "bg-secondary_black hover:bg-primary_black text-primary_white focus-visible:shadow-black_shadow focus:shadow-black_shadow",
        size === "sm" && "px-[13px] py-[9px] text-sm rounded-[10px]",
        size === "lg" && "px-[18px] py-3 text-base rounded-xl",
        (isDisabled || isLoading) && "cursor-not-allowed opacity-70",
        className
      )}
      disabled={isDisabled || isLoading}
    >
      {isLoading && <Spinner />} {children}
    </button>
  );
}
