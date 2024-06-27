import JsIcon from "@/components/Common/IconComp/JsIcon";

export default function GlowCardOrange() {
  return (
    <div className="absolute box-border w-full h-[205px] flex items-center justify-center py-12 px-6 overflow-hidden content-center flex-nowrap bg-secondary_white dark:bg-secondary_black rounded-3xl border border-[rgba(255, 255, 255, 0.1)]">
      {/* glow part */}
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

      {/* content part */}
      <div>
        <div className="flex items-center justify-center gap-[10px]">
          <JsIcon />{" "}
          <span className="text-3xl xs:text-5xl font-title dark:text-primary_white text-secondary_black">
            JavaScript
          </span>
        </div>
        <p className="text-sm text-secondary_gray w-[99%] xs:w-[95%] lg:w-3/4 mx-auto text-center mt-4">{`I've a robust background in JavaScript, allowing me to build dynamic and scalable applications with precision and efficiency.`}</p>
      </div>
    </div>
  );
}
