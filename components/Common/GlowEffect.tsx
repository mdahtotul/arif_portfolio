export default function GlowEffect() {
  return (
    <div className="relative block w-[400px] h-[40px] mx-auto z-0 aspect-[1.5/1] rounded-[0px_0px_0px_0px] pl-10">
      <div className="absolute w-[300px] h-[300px] rounded-[500px] overflow-visible block blur-[32px] aspect-[1/1] mix-blend-overlay">
        <div className="absolute bg-glow-1 w-[300px] h-[300px] block rounded-[50%] overflow-hidden" />
      </div>

      <div className="absolute w-[300px] h-[300px] rounded-[500px] overflow-visible block blur-[32px] aspect-[1/1]">
        <div className="absolute bg-glow-2 w-[300px] h-[300px] overflow-hidden rounded-[50%] block" />
      </div>

      <div className="absolute w-[400px] h-[400px] rounded-[500px] overflow-visible block blur-[70px] aspect-[1/1]">
        <div className="absolute bg-glow-3 w-[400px] h-[400px] rounded-[50%] overflow-hidden opacity-80" />
      </div>
    </div>
  );
}
