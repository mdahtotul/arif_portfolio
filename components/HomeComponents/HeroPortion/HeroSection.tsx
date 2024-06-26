"use client";

import Button2 from "@/components/Common/Button2";
import GlowEffect from "@/components/HomeComponents/HeroPortion/GlowEffect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function HeroSection() {
  const handleCheckResume = () => {
    window.open(
      "https://drive.google.com/file/d/1H7q0O2Z1qOB845CEv1ANX7eqtsCS8zyy/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <section className="h-full md:h-[700px] ">
        {/* <HeroSpotlights /> */}

        <div className="">
          <div className="md:max-w-3xl mx-auto mt-14">
            <TextGenerateEffect
              words="Want Seamless Experiences with Your Website?"
              className="font-title font-normal text-4xl xs:text-5xl md:text-7xl text-primary_black dark:text-white text-center"
              spanWords={["Seamless", "Experiences"]}
              spanClassName="text-secondary_orange"
            />
          </div>

          <p className="font-subtitle max-w-xl text-center mx-auto text-secondary_gray text-base sm:text-xl font-medium mt-7">
            If you seek smooth experiences, stunning visuals, and
            industry-standard code quality for your website, you&apos;re in the
            right place!
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-10 z-10">
          <Button2
            type="button"
            variant="orange"
            size="lg"
            onClick={handleCheckResume}
            className="z-40"
          >
            Check Resume
          </Button2>
          <Button2 type="button" variant="black" size="lg" className="z-40">
            <Link href="#projects">Projects</Link>
          </Button2>
        </div>

        <div className="relative">
          <GlowEffect />
        </div>
      </section>
    </>
  );
}
