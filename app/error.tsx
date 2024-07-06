"use client";

import Button2 from "@/components/Common/Button2";
import SectionHeader from "@/components/Common/SectionHeader";
import GlowEffect from "@/components/HomeComponents/HeroPortion/GlowEffect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="max-w-7xl w-full h-full bg-primary_white dark:bg-primary_black pb-20  mx-auto overflow-x-hidden">
      <BackgroundBeams />

      <section className="h-full md:h-[500px] mt-16">
        <SectionHeader
          badge="Error 500"
          title="Something went wrong!"
          spanTitle={["wrong"]}
          subtitle="Sorry for the inconvenience. Please try again later or go back to home."
        />

        <div className="flex items-center justify-center mt-10">
          <Button2 type="button" variant="orange" size="lg" className="z-40">
            <Link href="/">Go Home</Link>
          </Button2>
        </div>

        <div className="relative">
          <GlowEffect />
        </div>
      </section>
    </div>
  );
}
