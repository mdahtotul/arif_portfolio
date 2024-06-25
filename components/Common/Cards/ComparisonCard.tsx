import { cn } from "@/lib/utils";
import { CheckCheckIcon, XIcon } from "lucide-react";

export default function ComparisonCard({
  title,
  data,
}: {
  title: string;
  data: string[];
}) {
  const cardHeight = "h-[400px] 2xs:h-[360px] sm:h-[320px]";
  return (
    <div className="relative w-full h-[480px] 2xs:h-[440px] sm:h-[400px] lg:h-[450px]">
      <h5
        className={cn(
          "text-center text-3xl my-5",
          title == "Me"
            ? "text-secondary_black dark:text-primary_white"
            : "text-[#4d4d4d]"
        )}
      >
        {title}
      </h5>

      <div
        className={`absolute box-border w-full ${cardHeight} flex items-center justify-center py-12 px-6 overflow-hidden content-center flex-nowrap bg-primary_white dark:bg-secondary_black rounded-3xl border border-[rgba(255, 255, 255, 0.1)]`}
      >
        {/* glow part */}
        {title === "Me" && (
          <div className="absolute -top-[510px] -right-60 block w-[500px] h-[500px] overflow-visible rotate-[224deg] z-0 rounded-[0px_0px_0px_0px]">
            {/* layer 1 */}
            <div className="block absolute w-[300px] h-[300px] blur-[32px] mix-blend-overlay overflow-visible aspect-[1/1] rounded-[500px]">
              <div className="block absolute w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
            </div>
            {/* layer 2 */}
            <div className="block absolute w-[300px] h-[300px] blur-[32px]  overflow-visible aspect-[1/1] rounded-[500px]">
              <div className="block absolute w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
            </div>
            {/* layer 3 */}
            <div className="block absolute w-[400px] h-[400px] blur-[70px]  overflow-visible aspect-[1/1] rounded-[500px]">
              <div className="block absolute w-[400px] h-[400px] overflow-hidden rounded-[50%] bg-glow-3 opacity-80" />
            </div>
          </div>
        )}

        <div
          className={`w-full ${cardHeight} p-2 2xs:p-4 sm:p-8 rounded-3xl bg-primary_white dark:bg-secondary_black`}
        >
          {data.map((item, idx) => (
            <p
              key={idx}
              className={cn(
                "flex items-center gap-2 text-lg mt-3",
                title === "Me"
                  ? "text-secondary_black dark:text-primary_white"
                  : "text-secondary_gray"
              )}
            >
              {title !== "Me" ? (
                <XIcon className="text-secondary_gray" />
              ) : (
                <CheckCheckIcon className="text-secondary_orange" />
              )}{" "}
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
