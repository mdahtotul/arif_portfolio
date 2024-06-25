import PythonIcon from "../IconComp/PythonIcon";

export default function GlowCardBlueOrange() {
  return (
    <div className="box-border absolute overflow-hidden w-full h-[205px] flex items-center justify-center content-center flex-nowrap px-12 py-6 bg-primary_white dark:bg-secondary_black rounded-3xl border border-[rgba(255, 255, 255, 0.1)]">
      {/* glow part 1*/}
      <div className="absolute -bottom-[480px] -left-40 block w-[500px] h-[500px] z-0 overflow-visible rounded-none">
        {/* layer 1.1 */}
        <div className="absolute block w-[300px] h-[300px] blur-[32px] mix-blend-overlay overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
        </div>
        {/* layer 1.2 */}
        <div className="absolute block w-[300px] h-[300px] blur-[32px] overflow-visible rounded-[500px] aspect-[1/1]">
          <div className="absolute block w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
        </div>
        {/* layer 1.3 */}
        <div className="absolute block w-[400px] h-[400px] blur-[70px] overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[400px] h-[400px] overflow-hidden rounded-[50%] bg-glow-3 opacity-80" />
        </div>
      </div>

      {/* glow part 2*/}
      <div className="absolute -top-[340px] -right-72 block w-[500px] h-[500px] z-0 overflow-visible rounded-none">
        {/* layer 2.1 */}
        <div className="absolute block w-[300px] h-[300px] blur-[32px] mix-blend-overlay overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
        </div>
        {/* layer 2.2 */}
        <div className="absolute block w-[300px] h-[300px] blur-[32px] overflow-visible rounded-[500px] aspect-[1/1]">
          <div className="absolute block w-[300px] h-[300px] overflow-hidden rounded-[50%] bg-glow-1" />
        </div>
        {/* layer 2.3 */}
        <div className="absolute block w-[400px] h-[400px] blur-[70px] overflow-visible aspect-[1/1] rounded-[500px]">
          <div className="absolute block w-[400px] h-[400px] overflow-hidden rounded-[50%] bg-glow-3 opacity-80" />
        </div>
      </div>

      {/* content part */}
      <div>
        <div className="flex items-center justify-center gap-[10px]">
          <PythonIcon />{" "}
          <span className="text-3xl xs:text-5xl font-title dark:text-primary_white text-secondary_black">
            Python
          </span>
        </div>
        <p className="text-sm text-secondary_gray w-[99%] xs:w-[95%] lg:w-3/4 mx-auto text-center mt-4">{`Ive a strong background in Python and Django, enabling me to develop robust and scalable web applications.`}</p>
      </div>
    </div>
  );
}
