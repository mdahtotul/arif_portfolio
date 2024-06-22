import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface ISectionHeaderProps {
  badge: string;
  title: string;
  spanTitle: string[];
  spanClassName?: string;
  subtitle: string;
}

export default function SectionHeader({
  badge,
  title,
  spanTitle,
  subtitle,
  spanClassName = "text-secondary_orange",
}: ISectionHeaderProps) {
  return (
    <div className="w-full flex flex-col space-y-5">
      <Badge variant="b&w" size="lg" className="mx-auto w-max">
        {badge}
      </Badge>
      <h1 className="font-title font-normal text-2xl xs:text-4xl md:text-6xl text-primary_black dark:text-white text-center">
        {title.split(" ").map((word, idx) => (
          <span
            key={idx}
            className={cn(spanTitle?.includes(word) && spanClassName)}
          >
            {word}{" "}
          </span>
        ))}
      </h1>
      <p className="font-subtitle max-w-xl text-center mx-auto text-secondary_gray text-base sm:text-xl font-medium mt-7">
        {subtitle}
      </p>
    </div>
  );
}
