export default function GlowEffect() {
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden w-full h-[250px] pt-28">
        <div className="relative block w-[400px] h-[200px] mx-auto z-0 aspect-[1.5/1] rounded-[0px_0px_0px_0px] pl-10">
          <div className="absolute w-[300px] h-[300px] rounded-[500px] overflow-visible block blur-[32px] aspect-[1/1] mix-blend-overlay">
            <div className="absolute bg-glow-1 w-[300px] h-[300px] block rounded-full overflow-hidden z-40" />
          </div>

          <div className="absolute w-[300px] h-[300px] rounded-[500px] overflow-visible block blur-[32px] aspect-[1/1]">
            <div className="absolute bg-glow-2 w-[300px] h-[300px] overflow-hidden rounded-full block z-30" />
          </div>

          <div className="absolute w-[400px] h-[400px] rounded-[500px] overflow-visible block blur-[70px] aspect-[1/1]">
            <div className="absolute bg-glow-3 w-[400px] h-[400px] rounded-full overflow-hidden opacity-80 z-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
