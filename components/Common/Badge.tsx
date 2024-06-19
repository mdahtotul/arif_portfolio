import { cn } from "@/lib/utils";

interface IBadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: "orange" | "b&w";
  size?: "sm" | "lg";
}
export default function Badge({
  className,
  variant,
  size,
  children,
}: IBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl backdrop:blur-[5px]",
        variant === "b&w" &&
          "bg-primary_white text-secondary_black dark:bg-secondary_black dark:text-primary_white border dark:border-primary_gray",
        variant === "orange" &&
          "bg-secondary_orange dark:text-primary_black border dark:border-primary_gray",
        size === "lg" && "px-4 py-3",
        size === "sm" && "px-3 py-2",
        className
      )}
    >
      {children}
    </div>
  );
}
