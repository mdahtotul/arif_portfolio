import { Spotlight } from "../ui/Spotlight";

export default function HeroSpotlights() {
  return (
    <div className="">
      <Spotlight
        className="hidden dark:block -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="dark:hidden -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="red"
      />
      <Spotlight className="left-2/3 h-[80vh] w-[50vw] top-10" fill="purple" />
      <Spotlight className="left-60 top-28 h-[80vh] w-full" fill="blue" />
    </div>
  );
}
