import TSIcon from "@/components/Common/IconComp/TSIcon";

export default function GlowCardBlue() {
  return (
    <div className="absolute box-border w-full h-[205px] flex items-center justify-center py-12 px-6 backdrop:blur-[10px] overflow-hidden content-center flex-nowrap gap-10 rounded-3xl bg-secondary_white dark:bg-secondary_black border border-[rgba(255, 255, 255, 0.1)]">
      <div className="absolute -top-[350px] -left-52 block w-[500px] h-[500px] overflow-visible z-0 rounded-[0px_0px_0px_0px]">
        {/* 1st part */}
        <div className="absolute block w-[300px] h-[300px] blur-[32px] mix-blend-overlay overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
        </div>
        {/* 2nd part */}
        <div className="absolute block w-[300px] h-[300px] blur-[32px] mix-blend-overlay overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
        </div>
        {/* 3rd part */}
        <div className="absolute block w-[400px] h-[400px] blur-[70px] mix-blend-overlay overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[400px] h-[400px] overflow-hidden rounded-[50%] bg-glow-3 opacity-80" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-[10px]">
          <TSIcon />{" "}
          <span className="text-3xl xs:text-5xl font-title dark:text-primary_white text-secondary_black">
            TypeScript
          </span>
        </div>
        <p className="text-sm text-secondary_gray w-[99%] xs:w-[95%] lg:w-3/4 mx-auto text-center mt-4">{`I have extensive TypeScript experience, ensuring my code is exceptionally clean and maintainable.`}</p>
      </div>
    </div>
  );
}
