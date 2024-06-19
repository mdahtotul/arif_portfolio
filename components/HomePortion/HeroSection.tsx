import Button2 from "../Common/Button2";
import GlowEffect from "../Common/GlowEffect";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import HeroSpotlights from "./HeroSpotlights";

export default function HeroSection() {
  return (
    <section className="">
      <HeroSpotlights />

      <div className="">
        <div className="w-[90%] md:max-w-3xl mx-auto mt-14">
          <TextGenerateEffect
            words="Want Seamless Experiences with Your Website?"
            className="font-title font-normal text-5xl md:text-7xl text-primary_black dark:text-white text-center"
            spanWords={["Seamless", "Experiences"]}
            spanClassName="text-secondary_orange"
          />
        </div>

        <p className="font-subtitle max-w-xl text-center mx-auto text-secondary_gray text-xl font-medium mt-7">
          If you seek smooth experiences, stunning visuals, and
          industry-standard code quality for your website, you&apos;re in the
          right place!
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <Button2 type="button" variant="orange" size="lg">
          Check Resume
        </Button2>
        <Button2 type="button" variant="black" size="lg">
          Projects
        </Button2>
      </div>

      <div className="relative mt-24">
        <GlowEffect />
      </div>
    </section>
  );
}
